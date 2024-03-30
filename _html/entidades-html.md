---
title: Entidades HTML
date: 2023-12-20
last_modified_at: 2023-12-20
permalink: /html/entidades-html/
excerpt: "Las entidades HTML nos sirven para poder insertar símbolos que se vean de forma correcta en cualquier codificación del lenguaje."
tags: [entidades]
image:
  path: /img/covers/html-cover.png
---

Cuando estemos insertando texto en nuestros documentos [HTML](https://www.manualweb.net/html/) puede darse el caso de que necesitemos insertar símbolos. Bien ya sean símbolos de la codificación que estemos utilizando o símbolos de carácter general. Esto pueden ser monedas, símbolos de puntuación,…


Para ello [HTML](https://www.manualweb.net/html/) nos ofrece las entidades. Las entidades son unas estructuras que, mediante el uso de una codificación, nos permiten representar un símbolo.


La estructura de la entidad [HTML](https://www.manualweb.net/html/) es un **ampersand(&)** seguido del **código o nombre de la entidad** y terminado en **un punto y coma(;)**.


```html
&codigo;
```


En el caso de que utilicemos los códigos, estos se anteponen de una almohadilla.


Algunos de las entidades más utilizadas son los acentos:


```html
á   &aacute;
é   &eacute;
í   &iacute;
```


Los símbolos que utiliza el propio lenguaje [HTML](https://www.manualweb.net/html/):


```html
&   &amp;
<   &lt;
>   &gt;
```


U otros comunes:


```html
€   &euro;
£   &pound;
©   &copy;
®   &reg;
```


## Principales entidades HTML


| Carácter | Código | Entidad | Carácter | Código | Entidad |
| -------- | ------ | ------- | -------- | ------ | ------- |
| !        | 33;    | –       | "        | 34;    | –       |
| #        | 35;    | –       | $        | 36;    | –       |
| %        | 37;    | –       | &        | 38;    | –       |
| ’        | 39;    | –       | (        | 40;    | –       |
| )        | 41;    | –       | *        | 42;    | –       |
| +        | 43;    | –       | ,        | 44;    | –       |
| -        | 45;    | –       | .        | 46;    | –       |
| /        | 47;    | –       | :        | 58;    | –       |
| ;        | 59;    | –       | <        | 60;    | –       |
| =        | 61;    | –       | >        | 62;    | –       |
| ?        | 63;    | –       | @        | 64;    | –       |
| [        | 91;    | –       | \        | 92;    | –       |
| ]        | 93;    | –       | ^        | 94;    | –       |
| _        | 95;    | –       | `        | 96;    | –       |
| {        | 123;   | –       |          |        | 124;    |
| }        | 125;   | –       | ~        | 126;   | –       |
|          | 160;   | nbsp    | ¡        | 161;   | iexcl   |
| ¢        | 162;   | cent    | £        | 163;   | pound   |
| ¤        | 164;   | curren  | ¥        | 165;   | yen     |
| ¦        | 166;   | brvbar  | §        | 167;   | sect    |
| ¨        | 168;   | uml     | ©        | 169;   | copy    |
| ª        | 170;   | ordf    | «        | 171;   | laquo   |
| ¬        | 172;   | not     |          | 173;   | shy     |
| ®        | 174;   | reg     | ¯        | 175;   | macr    |
| °        | 176;   | deg     | ±        | 177;   | plusmn  |
| ²        | 178;   | sup2    | ³        | 179;   | sup3    |
| ´        | 180;   | acute   | µ        | 181;   | micro   |
| ¶        | 182;   | para    | ·        | 183;   | middot  |
| ¸        | 184;   | cedil   | ¹        | 185;   | sup1    |
| º        | 186;   | ordm    | »        | 187;   | raquo   |
| ¼        | 188;   | frac14  | ½        | 189;   | frac12  |
| ¾        | 190;   | frac34  | ¿        | 191;   | iquest  |
| À        | 192;   | Agrave  | Á        | 193;   | Aacute  |
| Â        | 194;   | Acirc   | Ã        | 195;   | Atilde  |
| Ä        | 196;   | Auml    | Å        | 197;   | Aring   |
| Æ        | 198;   | AElig   | Ç        | 199;   | Ccedil  |
| È        | 200;   | Egrave  | É        | 201;   | Eacute  |
| Ê        | 202;   | Ecirc   | Ë        | 203;   | Euml    |
| Ì        | 204;   | Igrave  | Í        | 205;   | Iacute  |
| Î        | 206;   | Icirc   | Ï        | 207;   | Iuml    |
| Ð        | 208;   | ETH     | Ñ        | 209;   | Ntilde  |
| Ò        | 210;   | Ograve  | Ó        | 211;   | Oacute  |
| Ô        | 212;   | Ocirc   | Õ        | 213;   | Otilde  |
| Ö        | 214;   | Ouml    | ×        | 215;   | times   |
| Ø        | 216;   | Oslash  | Ù        | 217;   | Ugrave  |
| Ú        | 218;   | Uacute  | Û        | 219;   | Ucirc   |
| Ü        | 220;   | Uuml    | Ý        | 221;   | Yacute  |
| Þ        | 222;   | THORN   | ß        | 223;   | szlig   |
| à        | 224;   | agrave  | á        | 225;   | aacute  |
| â        | 226;   | acirc   | ã        | 227;   | atilde  |
| ä        | 228;   | auml    | å        | 229;   | aring   |
| æ        | 230;   | aelig   | ç        | 231;   | ccedil  |
| è        | 232;   | egrave  | é        | 233;   | eacute  |
| ê        | 234;   | ecirc   | ë        | 235;   | euml    |
| ì        | 236;   | igrave  | í        | 237;   | iacute  |
| î        | 238;   | icirc   | ï        | 239;   | iuml    |
| ð        | 240;   | eth     | ñ        | 241;   | ntilde  |
| ò        | 242;   | ograve  | ó        | 243;   | oacute  |
| ô        | 244;   | ocirc   | õ        | 245;   | otilde  |
| ö        | 246;   | ouml    | ÷        | 247;   | divide  |
| ø        | 248;   | oslash  | ù        | 249;   | ugrave  |
| ú        | 250;   | uacute  | û        | 251;   | ucirc   |
| ü        | 252;   | uuml    | ý        | 253;   | yacute  |
| þ        | 254;   | thorn   | ÿ        | 255;   | yuml    |


| **Carácter** | **Código** | **Entidad** | **Carácter** | **Código** | **Entidad** |
| ------------ | ---------- | ----------- | ------------ | ---------- | ----------- |
| !            | &#33;      | –           | "            | &#34;      | –           |
| #            | &#35;      | –           | $            | &#36;      | –           |
| %            | &#37;      | –           | &            | &#38;      | –           |
| ’            | &#39;      | –           | (            | &#40;      | –           |
| )            | &#41;      | –           | *            | &#42;      | –           |
| +            | &#43;      | –           | ,            | &#44;      | –           |
| -            | &#45;      | –           | .            | &#46;      | –           |
| /            | &#47;      | –           | :            | &#58;      | –           |
| ;            | &#59;      | –           | <            | &#60;      | –           |
| =            | &#61;      | –           | >            | &#62;      | –           |
| ?            | &#63;      | –           | @            | &#64;      | –           |
| [            | &#91;      | –           | \            | &#92;      | –           |
| ]            | &#93;      | –           | ^            | &#94;      | –           |
| _            | &#95;      | –           | `            | &#96;      | –           |
| {            | &#123;     | –           | |            | &#124;     | –           |
| }            | &#125;     | –           | ~            | &#126;     | –           |
|              | &#160;     | nbsp        | ¡            | &#161;     | iexcl       |
| ¢            | &#162;     | cent        | £            | &#163;     | pound       |
| ¤            | &#164;     | curren      | ¥            | &#165;     | yen         |
| ¦            | &#166;     | brvbar      | §            | &#167;     | sect        |
| ¨            | &#168;     | uml         | ©            | &#169;     | copy        |
| ª            | &#170;     | ordf        | «            | &#171;     | laquo       |
| ¬            | &#172;     | not         |              | &#173;     | shy         |
| ®            | &#174;     | reg         | ¯            | &#175;     | macr        |
| °            | &#176;     | deg         | ±            | &#177;     | plusmn      |
| ²            | &#178;     | sup2        | ³            | &#179;     | sup3        |
| ´            | &#180;     | acute       | µ            | &#181;     | micro       |
| ¶            | &#182;     | para        | ·            | &#183;     | middot      |
| ¸            | &#184;     | cedil       | ¹            | &#185;     | sup1        |
| º            | &#186;     | ordm        | »            | &#187;     | raquo       |
| ¼            | &#188;     | frac14      | ½            | &#189;     | frac12      |
| ¾            | &#190;     | frac34      | ¿            | &#191;     | iquest      |
| À            | &#192;     | Agrave      | Á            | &#193;     | Aacute      |
| Â            | &#194;     | Acirc       | Ã            | &#195;     | Atilde      |
| Ä            | &#196;     | Auml        | Å            | &#197;     | Aring       |
| Æ            | &#198;     | AElig       | Ç            | &#199;     | Ccedil      |
| È            | &#200;     | Egrave      | É            | &#201;     | Eacute      |
| Ê            | &#202;     | Ecirc       | Ë            | &#203;     | Euml        |
| Ì            | &#204;     | Igrave      | Í            | &#205;     | Iacute      |
| Î            | &#206;     | Icirc       | Ï            | &#207;     | Iuml        |
| Ð            | &#208;     | ETH         | Ñ            | &#209;     | Ntilde      |
| Ò            | &#210;     | Ograve      | Ó            | &#211;     | Oacute      |
| Ô            | &#212;     | Ocirc       | Õ            | &#213;     | Otilde      |
| Ö            | &#214;     | Ouml        | ×            | &#215;     | times       |
| Ø            | &#216;     | Oslash      | Ù            | &#217;     | Ugrave      |
| Ú            | &#218;     | Uacute      | Û            | &#219;     | Ucirc       |
| Ü            | &#220;     | Uuml        | Ý            | &#221;     | Yacute      |
| Þ            | &#222;     | THORN       | ß            | &#223;     | szlig       |
| à            | &#224;     | agrave      | á            | &#225;     | aacute      |
| â            | &#226;     | acirc       | ã            | &#227;     | atilde      |
| ä            | &#228;     | auml        | å            | &#229;     | aring       |
| æ            | &#230;     | aelig       | ç            | &#231;     | ccedil      |
| è            | &#232;     | egrave      | é            | &#233;     | eacute      |
| ê            | &#234;     | ecirc       | ë            | &#235;     | euml        |
| ì            | &#236;     | igrave      | í            | &#237;     | iacute      |
| î            | &#238;     | icirc       | ï            | &#239;     | iuml        |
| ð            | &#240;     | eth         | ñ            | &#241;     | ntilde      |
| ò            | &#242;     | ograve      | ó            | &#243;     | oacute      |
| ô            | &#244;     | ocirc       | õ            | &#245;     | otilde      |
| ö            | &#246;     | ouml        | ÷            | &#247;     | divide      |
| ø            | &#248;     | oslash      | ù            | &#249;     | ugrave      |
| ú            | &#250;     | uacute      | û            | &#251;     | ucirc       |
| ü            | &#252;     | uuml        | ý            | &#253;     | yacute      |
| þ            | &#254;     | thorn       | ÿ            | &#255;     | yuml        |

