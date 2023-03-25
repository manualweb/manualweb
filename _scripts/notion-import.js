const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const moment = require('moment');
const path = require('path');
const fs = require('fs');
// or
// import {NotionToMarkdown} from "notion-to-md";

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

(async () => {


	const databaseId = process.env.DATABASE_ID;
	// TODO has_more
	const response = await notion.databases.query({
		database_id: databaseId,
		filter: {
			property: "Publish",
			checkbox: {
				equals: true
			}
		}
	})
	for (const r of response.results) {
		console.log(r)
		const id = r.id
        
        
		// title
		let title = id
		let ptitle = r.properties?.['Name']?.['title']
		if (ptitle?.length > 0) {
			title = ptitle[0]?.['plain_text']
        }

		// date
		let date = moment(r.created_time).format("YYYY-MM-DD")
		let pdate = r.properties?.['Date']?.['date']?.['start']
		if (pdate) {
			date = moment(pdate).format('YYYY-MM-DD')
        }
        
		// tags
		let tags = []
		let pelementos = r.properties?.['Tags']?.['multi_select']
		for (const t of pelementos) {
			const n = t?.['name']
			if (n) {
				tags.push(n.toLowerCase())
			}
        }

        let t = '[' + tags.toString() + ']'


		// Excerpt
		let excerpt = id
		let pexcerpt = r.properties?.['Excerpt']?.['rich_text']
		if (pexcerpt?.length > 0) {
			excerpt = pexcerpt[0]?.['plain_text']
		}

		// image
		let image= id
		let pimage = r.properties?.['Image']?.['rich_text']
		if (pimage?.length > 0) {
			image = pimage[0]?.['plain_text']
		}


        // Categoría
       let cat = ''
       let pcats = r.properties?.['Category']?.['multi_select']
       cat = pcats[0]?.['name']

       let nav = cat.toLowerCase();

        // Permalink
		let permalink = ''
		let ppermalink = r.properties?.['Permalink']?.['formula']
		permalink = ppermalink?.['string']

		// Slug
		let slug = ''
		let pslug = r.properties?.['Slug']?.['formula']
		slug = pslug?.['string']

		let fm = '';
        if (nav != 'posts') {

			fm = fm + `---
title: ${title}
permalink: ${permalink}
excerpt: "${excerpt}"
tags: ${t}
image:
	path: ${image}
---
`
		} else {
			fm = fm + `---
title: ${title}
layout: post
date: ${date}
author: Víctor Cuervo
excerpt: "${excerpt}"
tags: ${t}
image:
	path: ${image}
---
`
		}

		const mdblocks = await n2m.pageToMarkdown(id);
        const md = n2m.toMarkdownString(mdblocks);
        
        // ensure directory exists
	    const root = '_' + nav
	    fs.mkdirSync(root, { recursive: true })

		//writing to file
		// posts should have date previous slug

		let ftitle = '';
		if (nav == 'posts')
			ftitle = date + '-';

		ftitle = ftitle + `${slug}.md`


		fs.writeFile(path.join(root, ftitle), fm + md, (err) => {
			if (err) {
				console.log(err);
			}
		});
	}
})();