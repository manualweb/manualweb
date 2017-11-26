---
title: Entidades HTML
permalink: /html/entidades-html/
---

Cuando estemos insertando texto en nuestros documentos HTML puede darse el caso de que necesitemos insertar símbolos. Bien ya sean símbolos de la codificación que estemos utilizando o símbolos de carácter general. Esto pueden ser monedas, símbolos de puntuación,...

Para ello HTML nos ofrece las entidades. Las entidades son unas estructuras que, mediante el uso de una codificación, nos permiten representar un símbolo.

La estructura de la entidad HTML es un ampersand(&) seguido del código o nombre de la entidad y terminado en un punto y coma.

~~~html
&codigo;
~~~

En el caso de que utilicemos los códigos, estos se anteponen de una almohadilla.

Algunos de las entidades más utilizadas son los acentos:

~~~html
á	&aacute;
é	&eacute;
í	&iacute;
~~~

Los símbolos que utiliza el propio lenguaje HTML:

~~~html
&	&amp;
<	&lt;
>	&gt;
~~~

U otros comunes:

~~~html
€	&euro;
£	&pound;
©	&copy;
®	&reg;
~~~

## Principales entidades HTML

|  -- Carácter --  | --  Código --  |  -- Entidad --  | --  Carácter --  | --  Código --  | --  Entidad --  |
|---|---|---|---|---|---|
| ! | &#38;#33; | -- | " | &#38;#34; | -- |
| # | &#38;#35; | -- | $ | &#38;#36; | -- |
| % | &#38;#37; | -- | & | &#38;#38; | -- |
| ' | &#38;#39; | -- | ( | &#38;#40; | -- |
| ) | &#38;#41; | -- | * | &#38;#42; | -- |
| + | &#38;#43; | -- | , | &#38;#44; | -- |
| - | &#38;#45; | -- | . | &#38;#46; | -- |
| / | &#38;#47; | -- | : | &#38;#58; | -- |
| ; | &#38;#59; | -- | < | &#38;#60; | -- |
| = | &#38;#61; | -- | > | &#38;#62; | -- |
| ? | &#38;#63; | -- | @ | &#38;#64; | -- |
| [ | &#38;#91; | -- | \ | &#38;#92; | -- |
| ] | &#38;#93; | -- | ^ | &#38;#94; | -- |
| _ | &#38;#95; | -- | ` | &#38;#96; | -- |
| { | &#38;#123; | -- | &#124; | &#38;#124; | -- |
| } | &#38;#125; | -- | ~ | &#38;#126; | -- |
|   | &#38;#160; | nbsp | ¡ | &#38;#161; | iexcl |
| ¢ | &#38;#162; | cent | £ | &#38;#163; | pound |
| ¤ | &#38;#164; | curren | ¥ | &#38;#165; | yen |
| ¦ | &#38;#166; | brvbar | § | &#38;#167; | sect |
| ¨ | &#38;#168; | uml | © | &#38;#169; | copy |
| ª | &#38;#170; | ordf | « | &#38;#171; | laquo |
| ¬ | &#38;#172; | not | | &#38;#173; | shy |
| ® | &#38;#174; | reg | ¯ | &#38;#175; | macr |
| ° | &#38;#176; | deg | ± | &#38;#177; | plusmn |
| ² | &#38;#178; | sup2 | ³ | &#38;#179; | sup3 |
| ´ | &#38;#180; | acute | µ | &#38;#181; | micro |
| ¶ | &#38;#182; | para | · | &#38;#183; | middot |
| ¸ | &#38;#184; | cedil | ¹ | &#38;#185; | sup1 |
| º | &#38;#186; | ordm | » | &#38;#187; | raquo |
| ¼ | &#38;#188; | frac14 | ½ | &#38;#189; | frac12 |
| ¾ | &#38;#190; | frac34 | ¿ | &#38;#191; | iquest |
| À | &#38;#192; | Agrave | Á | &#38;#193; | Aacute |
| Â | &#38;#194; | Acirc | Ã | &#38;#195; | Atilde |
| Ä | &#38;#196; | Auml | Å | &#38;#197; | Aring |
| Æ | &#38;#198; | AElig | Ç | &#38;#199; | Ccedil |
| È | &#38;#200; | Egrave | É | &#38;#201; | Eacute |
| Ê | &#38;#202; | Ecirc | Ë | &#38;#203; | Euml |
| Ì | &#38;#204; | Igrave | Í | &#38;#205; | Iacute |
| Î | &#38;#206; | Icirc | Ï | &#38;#207; | Iuml |
| Ð | &#38;#208; | ETH | Ñ | &#38;#209; | Ntilde |
| Ò | &#38;#210; | Ograve | Ó | &#38;#211; | Oacute |
| Ô | &#38;#212; | Ocirc | Õ | &#38;#213; | Otilde |
| Ö | &#38;#214; | Ouml | × | &#38;#215; | times |
| Ø | &#38;#216; | Oslash | Ù | &#38;#217; | Ugrave |
| Ú | &#38;#218; | Uacute | Û | &#38;#219; | Ucirc |
| Ü | &#38;#220; | Uuml | Ý | &#38;#221; | Yacute |
| Þ | &#38;#222; | THORN | ß | &#38;#223; | szlig |
| à | &#38;#224; | agrave | á | &#38;#225; | aacute |
| â | &#38;#226; | acirc | ã | &#38;#227; | atilde |
| ä | &#38;#228; | auml | å | &#38;#229; | aring |
| æ | &#38;#230; | aelig | ç | &#38;#231; | ccedil |
| è | &#38;#232; | egrave | é | &#38;#233; | eacute |
| ê | &#38;#234; | ecirc | ë | &#38;#235; | euml |
| ì | &#38;#236; | igrave | í | &#38;#237; | iacute |
| î | &#38;#238; | icirc | ï | &#38;#239; | iuml |
| ð | &#38;#240; | eth | ñ | &#38;#241; | ntilde |
| ò | &#38;#242; | ograve | ó | &#38;#243; | oacute |
| ô | &#38;#244; | ocirc | õ | &#38;#245; | otilde |
| ö | &#38;#246; | ouml | ÷ | &#38;#247; | divide |
| ø | &#38;#248; | oslash | ù | &#38;#249; | ugrave |
| ú | &#38;#250; | uacute | û | &#38;#251; | ucirc |
| ü | &#38;#252; | uuml | ý | &#38;#253; | yacute |
| þ | &#38;#254; | thorn | ÿ | &#38;#255; | yuml |
