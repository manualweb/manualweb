

<dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-jasper</artifactId>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>jstl</artifactId>
</dependency>

<dependency>
  <groupId>org.apache.tomcat</groupId>
  <artifactId>tomcat-annotations-api</artifactId>
  <version>9.0.6</version>
</dependency>


ó


<!-- Need this to compile JSP -->
<!-- JSTL for JSP -->
		<dependency>
			<groupId>javax.servlet</groupId>
			<artifactId>jstl</artifactId>
		</dependency>

<dependency>
  <groupId>org.apache.tomcat.embed</groupId>
  <artifactId>tomcat-embed-jasper</artifactId>
  <scope>provided</scope>
</dependency>

<!-- Need this to compile JSP,
  tomcat-embed-jasper version is not working, no idea why -->
<dependency>
  <groupId>org.eclipse.jdt.core.compiler</groupId>
  <artifactId>ecj</artifactId>
  <version>4.6.1</version>
  <scope>provided</scope>
</dependency>	    
