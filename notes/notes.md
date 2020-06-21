The Responsive web design bootcamp: 


6 Modules: 
* CSS fundamentals 
* Start thinking responsively 
* Stepping up our style 
* Taking flexbox to the next level
* CSS grid: the ultimate layout tool 
* Taking it to the next level 



CSS fundamentals: 



Margin & padding- Margins and spacing out text: 
* Understanding when to use margin or padding (and when they will and won’t work) is really important. 


* Margins have a strange behavior where they merge together which can cause problems. 


* The spacing between heading elements as well as paragraphs is controlled by the margin-top and margin-bottom properties. By default, they all have a margin-top and a margin-bottom that is equal to their font-size.  If you want space between a paragraph you can give the paragraph a class and add a margin-top in the css for the class such as below: 


<!DOCTYPE html>
<html>
   <head>
        <link href="styles.css" rel="stylesheet">
        </head>
        <body>
              <div class="card">
                  <h1>Nisl suscipit adipiscing bibendum est ultricies integer quis auctor.</h1>
                  <P>Netus et malesuada fames ac. Sed cras ornare arcu dui vivamus. Elementum integer enim neque volutpat ac tincidunt vitae semper.</P>
                   <P class="links">
                       <a href="#">Contant me</a> <a href="#">learn more about me</a>
                   </P>
                   </div>
               </body>
               </html>


.card {
   background: black ;
   color: white ;
   width: 560px ;
   margin-left: auto ;
   margin-right: auto ; 
}




h1 {
   font-size: 24px ;
}


p {
   font-size: 18px ;
 
}



.links {
   margin-top: 40px ;
   line-height: 50px ; 
}


  
Collapsing margins: 
* By default margins collapse into one another. 


* I.e. if one element has a margin-bottom of 50px and the next one has a margin-top of 50px, the space between them will be 50px & not 100px. 


* If two margins collapses, it is always the bigger one of the two values that takes precedence / wins over the other.


* Collapsing margins have a few situations where they cause problems. Margins will collapse any time they touch each other. So if the first child in an element has a margin top, that can merge with the parent’s margin-top. 




* The background-color will always be on the parent. You can add padding on the parent to prevent the parent’s margin from merging with the child’s 


<!DOCTYPE html>
<html>
   <head>
        <link href="styles.css" rel="stylesheet">
        </head>
        <body>
              <div class="card">
                  <h1>Nisl suscipit adipiscing bibendum est ultricies integer quis auctor.</h1>
                  <P>Netus et malesuada fames ac. Sed cras ornare arcu dui vivamus. Elementum integer enim neque volutpat ac tincidunt vitae semper.</P>
                   <P class="links">
                       <a href="#">Contant me</a> <a href="#">learn more about me</a>
                   </P>
                   </div>
               </body>
               </html>



.card {
   background: black ;
   color: white ;
   width: 560px ;
   margin-left: auto ;
   margin-right: auto ; 
   padding: 50px ;
}


h1 {
   font-size: 24px ;
}


p {
   font-size: 18px ;
 
}




.links {
   margin-top: 45px ;
}



Margin & Padding - Consistency & a new type of selector: 
* For consistency often you would turn off the margin-top typography related elements (paragraphs, headings etc.). That way you can use padding on the parent and know the exact spacing that you’ll have and can keep all sides consistent. This could be painful but you can include all the element in one selector: 
h1, h2, h3, p {
   margin-top: 0 ;
}


* Flexbox & CSS grid margins no longer collapse. This can help you to stay more consistent. 



Inline & block elements: 


Block elements: 
   * always start a new line of content 
   * Default width is 100%  
   * Default height is 0 but will grow to fit the content inside it 
   * Block level elements will create a new line of content, stacking on top of each other by default (paragraphs, headings, lists & list items, divs, header, footer, main, section etc.). 


Inline elements: 
   * Does not start new lines 
   * Does not accept width, height or margin top & bottom 
   * Padding-top & padding-bottom can cause overlapping issues. 
   * Inline elements stay within the flow of what’s around them (links, strong, em, span, images). 
   * There are some important things to know about inline elements: 
   * You can only nest other inline elements in them (such as putting a link inside a strong element). I.e. you could have a link inside a strong element. A bold text inside a link. 
   * They will only respect margin, padding and borders which are placed on the left or right side and not the top and bottom. 


.card {
   background: black ;
   color: white ;
   width: 560px ;
   margin-left: auto ;
   margin-right: auto ; 
   padding: 50px ;
}



h1, p {
   margin-top: 0 ;
}


h1 {
   font-size: 24px ;
}


p {
   font-size: 18px ;
 
}
.links {
   margin-top: 0px ;
   margin-bottom: 0px ;
}

strong {
   background: yellow ; 
   color: black ;
}


The span element: 
* The span element is a very useful inline element. The span element is like strong and em, in that you use it to style text, but it has no default styling and no semantic meaning. Semantic meaning = gives text strong importance than those around it. 


* Because they are generic like a div you will often use a class on them. 


* A span by itself is useless. Normally you would use a class on them to make it easier to target with CSS. 
<!DOCTYPE html>
<html>
   <head>
        <link href="styles.css" rel="stylesheet">
        </head>
        <body>
              <div class="card">
                  <h1>Nisl suscipit <span class="span-test">adipiscing bibendum</span> est ultricies integer quis auctor.</h1>
                  <P>Netus et malesuada fames ac.<span class="span2">Sed crasornare arcu</span> dui vivamus. <strong>
                      Elementum integer enim neque</strong> volutpat ac tincidunt vitae semper.</P>


                   <P class="links">
                       <a href="#"><span class="contact">Contant me</a></span>
                      
                       <a href="#"><span class="learn">learn more about me</a></span>
                   </P>
                   </div>
               </body>
               </html>

.span-test {
   color: yellow ;
   text-decoration: underline;
}


.span2 {
   color: yellow ;
   text-decoration: underline;
}


.contact {
   color: yellow ;
   text-decoration: underline;
}


.learn {
   color: yellow ;
   text-decoration: underline;
}


Styling links: 
* Websites tend to have a lot of links on them so it is important to know how to style them. 


* You can change the style of a link like any other element, by using a simple element selector. 
a {
   color: #f30 ;
}

Different link states: 
* A:link = default normal state of a link 


* A:visited = a link to a page/site that you’ve already visited 


* A:focus = when a user selects a link without clicking on it (usually with keyboard navigation) 


* A:hover = when you “hover” the mouse cursor over a link 


* A:active = when someone is actively click on a link. 


Order matters: 
* A link often meets the requirements for 2 or more of the above states at any given time, so the order you put them in your CSS really matters. In general, it should follow the order in the above list. 
* You can target these different states by using something called a pseudo-class 
* A pseudo class is always done with a colon: 

a:link
a:visited
a:focus
a:hover
a:active

* Often the focus and hover state will be the same. 
Often you will set a global value for the links by doing the following (replaces everything and needs to be above the rest of the link pseudo classes): 


a {
   color: mediumaquamarine ;
}


* When styling links, users should know that they can interact with them. It should be very obvious. 
   * Change the color on hover & focus 
   * Leave text-decoration on (the underline). 
   * Remember to include styles for :focus 



Inline block: 
* Inline-block is the best of both worlds. Sometimes you need something which can stay inline and be able to set margins and paddings on. This can be done by changing it’s display property to inline-block. 
.test {
   display: inline-block ;
}


* The most common use case for this is creating buttons. 


.button {
   display: inline-block ;
   background: #FFE600;
   color: black ;
   padding: 20px ;
}


Styling buttons: 
* Put the class directly on your link 
* Always use padding to create the “size” of the button and not the width and height. 

           <p class="links">
               <a class="button" a href="test.html"><span class="contact-me">Contact Me</span></a>
               <a class="button" a href="testing_again.html"><span class="learn-me">Learn more about me</span></a>
           </p>


.button {
   display: inline-block ;
   background: #FFE600;
   color: black ;
   padding: 20px ;
   }


.button:hover {
   background-color: blue ;
}


* Do not use widths on buttons. 
* The padding left and right needs to be a bigger number than the padding on the top and bottom. In general, use a 1:2.5 ratio for the top and sides. 




Specificity basics: 
* Specificity in CSS is all about how specific the selectors are. The more specific they are, the higher priority they have. 


* From the elements seen so far from lowest to highest specificity: 
   * Element selector 
   * Class selector
   * ID selector 




* General rules get put on element selectors: 
   * Body
   * Headings
   * Paragraphs etc. 




* Everything else gets a class: 
   * Divs 
   * Sections 




Specificity - two selectors of equal value: 
* When two selectors have an equal value it is always going to be the 2nd one that wins. The browser is reading the CSS from top to bottom. 




Compound selectors: 
* Compound selectors are when you select elements, classes or IDs that are nested inside of another element in the HTML. 
* You can be more specific with selectors by using a compound selector. 


.section1 .btn {
   background-color: #FFE600;
   color: #000 ;
   display: inline-block ;
   padding: 20px ;
   text-decoration: none;
   font-weight: 800;
}


Compound selectors & Specificity: 
* Compound selectors have an impact on specificity as they add to how specific a selector is. 


* It is best practice to give everything a single class & avoid compound selectors as it gets more complicated the more you add to a single compound selector. 



A better way to name CSS classes: 
* In order to not repeat yourself you could create a template class for a .btn for things that you know you’ll need to add into your other btns: This is much more efficient & will save you time. 


.btn {
   display: inline-block ;
   padding: 15px 30px ;
   font-weight: bold ;
   font-size: 15px ;
}



This is done by referencing two classes in the same class field such as below: 
       <a href="#" class="btn btn-yellow" >Contact me</a>
       <a href="#" class="btn btn-dark" >Contact me</a>
.btn {
   display: inline-block ;
   padding: 12px 30px ;
   font-weight: bold ;
   font-size: 15px ;
   text-decoration: none;
}
.btn-yellow {
   background-color: #FFE600;
   color: #000 ;
}
.btn-dark {
   background-color: #000000;
   color: #FFE600 ;
}


Text properties: 

* Font properties : 
   * Font-family = type of font 
   * Font-size  = size of font 
   * Font-weight = bold etc. 
   * Font-style = italic 



* Text-properties : 
   * Text-align
   * Text-decoration 
   * Text-transform 
   * Color
   * Line-height



Font family & font stacks: 
* The font-family property is used to set the font you want to use for a given selector. 
   * Font-family: Arial ; 
   * Monospace = like in VS code 

* The problem with setting a font-family is that font will only work if the user has that specific font installed on their machine. 


* To solve this issue, you can use font stacks which allow you to declare backup fonts if the first one you wanted doesn’t work. 
* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


* If the first font doesn’t work it will go to the next font and so on until it works for the user. 


Google fonts: 
* Google fonts allows you to pick fonts and be nearly 100% certain that everyone will get the same experience. 


* Google hosts these fonts online & you can link to them. As long as google’s servers are up, everyone will be able to see those fonts. 


* Fonts.google.com and you will be able to pick a font as well as get the css stylesheet link to put in your code. Link it before your local stylesheet. You need to tell google font what weights and styles you want to use, otherwise bold and italic text might not work. 


* There are other options other than google fonts such as font kit, fontsquirrel, font awesome etc. 



Inheritance: 
* Inheritance is an important part of CSS and it almost exclusively applies to text (by default). 


* Inheritance deals with how certain properties are inherited from their parents. 


* I.e. you can set the font-family on the body and it will flow through the entire document. 


Working with, overwriting & applying inheritance: 
* When you overwrite an inherited property the thing that is more specific will take precedence and overwrite the inherited value. 


* Links do not inherit their parent’s color even though other inline elements such as em and strong do. Links already have a default style on them, setting their color to blue with a text-decoration giving them the underline. They do however inherit other properties such as font-size & font-weight. 


* Headings do not inherit the font-weight because they are bold by default. 


Module 2, starting to think responsively: 
Topics covered: 
* How to approach a layout 
* CSS units (absolute, relative & percentages) 
* Flexbox basics 
* Media query basics (adapting to different screen sizes). 
CSS units: 
* Absolute units = px, pt, cm, mm, in

* Relative units =
   * Relative to font size = em & rem. 
   * Relative to the viewport =  browser window. Vw, vh, vmin, vmax. 


* Percentage = mainly used for widths. Relative to their parent (except on height). 

CSS units percentage: 
.container {
   width: 50% ;
   margin: 0 auto ;
   border: 2px solid black ;
}


The container is 50% of it’s parent (50% of the screen size). 50% of section one, section two, header etc. 


Controlling the width of images: 
img {
   width: 500px ;
}


* Images will default to the size of themselves 


* Do not set a height on an image as well as a width. It will stretch and distort the image. 


* You can get the image to match the size of the container by using a percentage value: 
img {
   width: 100% ;
}
Min-width & max-height: 
* You can set a maximum or minimum width on an image. 


.container {
   width: 50% ;
   max-width: 620px ; /* never grow bigger than 620px */
   min-width: 500px; /* never go smaller than 500px */
   margin: 0 auto ;
   border: 2px solid black ;
}


* Having a max-width element set on the .container is a very common property to set. 


The em unit: 
* Relative units are always relative either to a font-size, or the size of the viewport. 


* For those which are relative to a font-size, which font-size they are relative to depends on a few things, which complicates matters. 


* The em and rem are considered relative because they are relative to the font-size of their parent. 


* Em are relative to their parent’s font-size 


* Font-size is an inherited property, so if you do not declare it anywhere, it’s getting it from the body (or by defaults which is 16px). 


* 1em = copy the font-size of the parent 


* 1.5em = 150% of the parent property 


The problem with ems: 
* When ems are used for the font-size of an element, it can create a cascading effect where things get out of control. Because ems look at the font-size of the parent (i.e. the last em) it will multiply the amount instead of being the number you set it. 


CSS units - rems: 
* The rem unit is short for root em. 


* That means the rem is always relative to the “root” of your document. 


* The root of an HTML page is always the html element. 


Picking which unit to use: 
* Font-size = em 
* Padding and margin = rem 
* Widths = em or percentage 



Flexbox refresher: 
* Elements normally have a display: block or a display: inline as a default setting from the browser. 


* Block elements stack on top of each other: 
   * div , header, footer, main h1>h6, p, li etc. 



* Inline elements stay within the flow of what’s around them: 
   * A, strong, em, span 



* You can change this behavior by setting the display property to flex on the parent element. When this is set it changes the behavior of all it’s affected children.  The divs will change to columns automatically and shrink to fit the content that is in the div 


Spacing out the columns: 
.parent {
   display: flex ;
   justify-content: space-between;
}


This will take the extra space and put it in between the elements / columns instead of the right side. 


Controlling the vertical position of flex elements: 
* display: flex = vertical 


* This stretches the vertical height of the div 



Media query basics: 
* Media queries let you add new styles that target only specific conditions. 


* Basic syntax = @media () { … } 


* The media type let’s you target different types of media 
   * @media screen {} 
   * @media print {} 
   * @media speech {}


* The media condition let’s you target specific conditions within that media type. 
   * @media (min-width: 600px) {} 
   * @media(orientation:landscape) {}
   * @media (hover) {} (specific features). 


* You can combine a type with a condition by using and: 


@media screen and (min-width: 960px) {
}




In the media query you will have to write what you are selecting: 



/* from a minimum width of 400px and bigger */
@media (min-width: 400px) {
   body {
       background: purple;
   }
}
/* from a minimum width of 650px and bigger */
@media (min-width: 650px) {
   body {
       background: orange;
   }
}
* Min width and above 400px it will turn to blue and above 650px will turn to orange. Anything smaller will turn into the default pink background. 


* The order of the media queries is really important. (the browser will read top to bottom). 


/* from a minimum width of 400px up to a width of 649px */
@media (min-width: 400px) and (max-width: 649px) {
   body {
       background: purple;
   }
}


Making the layout responsive with flex-direction: 


Flexbox -changing the axis around: 
.parent {
   display:flex ; /* creates columns */
   flex-direction: row; /* default behavior */
}
* Flex-direction default = row. When flex-direction is set to a row it’s parent is a row so that means that the children become columns within that row. 



Flex-direction explained: 
* Flex-direction works by switching the main axis, which means that justify-content switches from controlling content horizontally to vertically and align-items switches from the vertical to horizontal 


* Justify-content controls content on the main axis of a flex container. When you set flex-direction:column ; you are changing the main axis from being horizontal to vertical instead. 


* Align-items control items along the cross axis which gets switched from the vertical axis to the horizontal axis. 


display: flex ; /* creates columns */   flex-direction: column; /* switches the axis */


.columns {
   display: flex ;
   flex-direction: row;
   align-items: center ;
   justify-content: space-evenly;
   margin: 1em 0 ;
}



Creating a navigation:  
* Navigation is traditionally set up using an unordered list which is placed inside a <nav> element.. This leads to having to write extra CSS. Using an ul is the most common way it’s done. 


<nav>
           <ul>
               <li><a href="index.html">Home</a></li>
               <li><a href="about.html">About</a></li>
               <li><a href="recent.html">Recent-Posts</a></li>
               </ul>
               </nav>



Using flexbox to style navigation bars: 
* Because list items are block elements, they want to stack on top of each other. To make them into columns you can use display:flex on the ul  


* You can use justify-content:center to center your navigation menu 


nav ul {
    list-style: none;
    display: flex ;
    justify-content: center;
}


* <Main> = Main content of your website. You can have only one main per page. 


* <aside> = secondary information for your page. (i.e. sidebar). You can multiple <aside> per page. 


* <article> = when you want to display an article on your page. Everything placed inside the article element is self contained.  


The viewport meta tag: 
* To prevent problems from rendering pages that are not optimized for mobile devices & small screens, phones and tablets will render a zoomed out version of the page & shrink it down to fit their viewport. To prevent it from doing this, you need to add a meta tag at the head of the page. 
<meta name="viewport" content="width-device-width, initial-scale=1">


* This will ensure that the page actually loads properly on a mobile device.  


* Width-device-width = the width is equal to whatever device is being used and the initial scale is the zoom. 


Stepping up our style: 
In this module you’ll be looking at the CSS properties that make the difference between making something look “okay” to something that looks really polished. 
* Line-height 
* Text-transform 
* Letter-spacing 


In addition you’ll be looking at some things that you need to know in order to keep up with the current trends: 
* Viewport units 
* Background images 
* Gradients 
* Transitions 
* Blending modes 





A look at line-height: 
* Setting good line-heights can help large blocks of text easier to read and can help title look much better. 


* A line height of 1.6 will take the font size set on the body and will do the line-height as 1.6 times bigger than the font size. 


body {
  margin: 0;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.6;
}


* Line-height should always be around 1.6 to 1.7;  


* By using a unitless number it is going to take the line-height & apply it to everything. 



Text-transform: 
* This is a handy property that you can use to avoid having to rewrite text. 


Values: 
* Uppercase = all uppercase letters 


* Lowercase = all lowercase letters 


* Capitalize = first letter of each word will have a capital letter.  


Letter-spacing: 
* When text is either very small or set to uppercase, it can be harder to read. You can use letter-spacing to add a small amount of space between the letters to help increase readability. 


* In general you want to keep letter-spacing to a very small number, in the 1px to 2px range. 


letter-spacing: 2px ;



Color trick with rgba(): 
* When setting up colors, you aren’t limited to hex codes. You can use rgb() and rgba() to set colors as well. 


* For both of these properties the RGB scale is 0 to 255, so 0 is 0% of a given color and 255 is 100% of a given color.  


* If you use rgba() the a stands for alpha which you can use to control the alpha value / opacity of the color. This has a scale of 0 to 1 with 0 being fully transparent and 1 being completely opaque.    


* RGB = red green blue  


* The alpha scale has to be on a scale between 0 and 1: color: rgba (125, 235, 0.75);



footer {
 background:#5c3166;
 color: rgb(255, 255, 255, .65) ;
 text-align: center;
 padding: 2em 0;
}


* Doing this will let the footer color blend in with the text without having to come up with a robust color scheme. 


Background-images: 
* Whether you should use a background-image or a image is dependent on whether you have anything on top of your image (such as text, other images etc.) 


* Syntax = background-image: url(/static/filename.jpg);  


* The browser doesn’t make the image 100% by default. It is placed in CSS so it is a style / decoration. If you make it big enough the image will start to tile. It will fill the background with the image you have. This is good if you want to fill a background with a pattern 



Controlling background images: 
* Background images have a lot of properties to control them, from their size to their position & more. 


Properties: 
* Background-position = make image fit better (background-position:center ;) 
* Background-size (contain = make sure you can see entire image, cover=fill the space with image and crop the image if it doesn’t fit in space) 
* Background-attachment 
* Background-repeat = no-repeat = image no longer repeats itself, repeat-x = repeat only on x axis, repeat-y = repeat only on y axis 


.cat {
   background-image: url(/static/pink-dust.png);
   padding: 20px ; 
   background-size: contain;
   background-position: center;
   background-repeat: repeat-x ;
} 


BBQ Splash page project:  
* The + combinator will add a style if a selector is an adjacent sibling. I.e. h1 + p means those styles will only apply to paragraphs that are directly after an h1  


* The ~ combinator is the general sibling combinator. It will grab any selector that is a sibling to the first. I.e. h1 ~ p = select all paragraphs that are siblings to the h1. 


h2 + p {
   color: #f18119 ;
   font-weight: 900;
   font-size: 1.3rem ;
   text-transform: uppercase;
   margin-top: 0 ;



Viewport units: 
* Viewport units are a responsive unit. Unlike percentages which look at the width of the parent, viewport units always look at the size of the browser window. 


* Vh = viewport height 


* Vw = viewport width 


* Vmin = viewport minimum 


* Vmax = viewport maximum


* You will use vh and vw much more often than vmin and vmax 


header { 
    background: lightblue ; 
    padding: 1em ; 
    width: 50% ; 
    height: 50vh; 


}


When setting viewport units, especially for a height, it is strongly recommended to set it as as a min-height as this will help avoid problems when the content is taller than the viewport. 




.intro,
   .main-content {
       width: 50% ;
       min-height: 100vh ;
 
   }


Box-sizing:border-box :
* CSS calculates the size of an element  based on it’s content + padding + border + margin. 


* When you set a width, you are setting that width on the content of the element and then all the other properties get added to create the total size. 


* You can change this behavior by declaring : box-sizing:border-box  


* This will change how the size of an element is calculate, now including both padding and border, inside the width or height that was set.,  



* The star selector selects every single element on your page:    


* {
   box-sizing: border-box;
}


* Border-box is based on the padding and the border. They are included in the width / height of an element . Padding and border are included in the total width of something instead of being added on top of the width. 


Using flexbox to vertically center the main-content: 
.main-content {
   padding: 2em 1em ;
   display: flex ;
   flex-direction: column;
   justify-content: center;
   text-align: center;
}



Fixing the intro section on small & large screens: 
.intro {
   background-color: #404040 ;
   background-image: url("/static/dark-ribs.jpeg") ;
   padding: 0em .5em 2em ;
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   display: flex ;
   justify-content: space-between; 
   min-height: 50vh;
   flex-direction: column;
}



Dealing with very large screen resolutions: 
.intro > *,
.main-content > *  {
   margin-left: auto ;
   margin-right: auto ;
}
* The star selector will select everything that is nested in .intro and .main-content. Do not use shorthand to change margin-left and margin-right as this will overwrite anything that is set on the top and bottom. 


* The > selector only applies to direct children of the element.         


Another solution: 
* Wrap everything in a container container-intro : 
                <div class="container container-intro">


And then: 

@media (min-width: 675px): 

.container-intro {
       height: 100% ;
   }  


 .container-intro {
   display: flex ;
   justify-content: space-between;
   min-height: 50vh;
   flex-direction: column;
}




Basic forms: 
* HTML forms allow users to send data, often to a server which can then send that off as an email .


* <form> = the form itself 


* <label> = describes the different form elements 


* <input> where user can input information 
   * <input type=”text”> 
   * <input type=”checkbox”>
   * <input type=”radio”>
   * <input type=”email”> 
   * <input type=”color”> 
   * <input type=”date”> 
   * <input type=”Password”> 
   * <input type=”file”> 



* <button> used to submit the form 
* Labels are used to connect some text with an input or another form element


* For labels to be properly connected they need a few extra attributes: 


<form action="#" method="post">
           <label for="fname">First Name:</label>
           <input id="fname" type="text">
           <br>
           <br>


           <label for="lname">Last Name:</label>
           <input id="lname" type="text">
           <br>
           <br>


           <label for="email">Email:</label>
           <input id="email" type="text">
           <br> 
                      <button type="submit">Submit</button>

       </form>



Form attributes: 
There are lots of different attributes that can be added to form elements: 

<input type=”text” required> 


<input type=”text” placeholder=”email…”> 


Aria-label = can be read by assistive technologies. 


The basics of styling a form: 
* Form elements have a lot of default styles on them compared to most other HTML elements. 


* Border-radius = rounded corners 


CSS Gradients: 
* Gradients are a type of background image in css. 


Syntax: 
*  background-image: linear-gradient(red, blue);   


* Background-image: radial-gradient(); 
   background-image: linear-gradient(to right, #FF713B, #FFA51D) ;


   background-image: linear-gradient(45deg, green, yellow) ;


90deg = left to right 


   background-image: linear-gradient(90deg,  orange 75%, teal) ;



.btn {
   display: inline-block ;
   padding: .85em 1.0em ;
   text-transform: uppercase ;
   font-size: 0.6rem ;
   font-weight: 900;
   letter-spacing: 1px ;
   border: 0 ;
   cursor: pointer;
   color: #fff ;

}




.btn-main {
   background-image: linear-gradient(to left, #FF713B, #FFA51D)   


}   


Basic transitions: 


.btn-main {
   background-image: linear-gradient(to left, #FF713B, #FFA51D) ;    
   color: #fff ;
   transition: color 500ms ;
}   



Intro to transforms: 
* Transitions can affect performance. Therefore you should generally not use “all” when using the property of transition. You should use the following: 
* transition: color 500ms;


.btn-main {
 background-image: linear-gradient(to left, #ff713b, #ffa51d);
 color: #fff;
 transition: color 500ms;
 transition: 300ms ;


}


.btn-main:hover {
 color: black;
 transform: scale(1.1);
 transition: 1s ;


}


Border gradients: 
 border-top: 6px solid #F18119;
 border-image: linear-gradient(to left, #ff713b, #ffa51d) 1;
 



Blending images, colors and gradients with background-blend-mode: 


Background-blend-mode: 
* Multiply = keeps dark pixels 


* Screen = keeps light pixels and knocks out dark pixels


* Overlay = keeps neaturls  + boosts contrast 


.intro {
  background-color: #404040;
  background-image: url("/static/dark-ribs.jpeg");
  padding: 0em 0.5em 2em;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; 
  background-blend-mode: multiply ; 
}


 background-image: url("/static/dark-ribs.jpeg"), linear-gradient(red, blue);


Taking flexbox to the next level: 


Flex-direction, flex-wrap & flex-flow: 


Flex-direction: 
* Row-reverse = reverse items  


* Column-reverse = reverse items. 


* Row = default behaviour 




Flex-wrap: 
* Wrap = items will wrap around once they become too big for the flexbox. 




Flex-flow: 
* Instead of writing flex-direction and flex-wrap you can write flex-flow. The flex-flow combines the other two together. 

* Row-reverse wrap ; 



justify-content , align-items & their relationship to flex-direction: 
* The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.


* The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.


* The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).





Justify-content: 
* The default for justify-content is flex-start 
* Flex-end = empty space on the end


* Center = center 


* Space-evenly = distributes space evenly 




Flex-grow and flex-shrink explained: 
* The flex-grow CSS property sets the flex grow factor of a flex item main size. It specifies how much of the remaining space in the flex container should be assigned to the item (the flex grow factor).


* The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.



Flex-basis: 
* The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.
flex-basic : auto ; = default behavior 


align-self
* The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.


#########################
####Module 4 completed ###
########################## 



Module 5:CSS grid: the ultimate layout tool: 


Intro to CSS Grid: 

* Flexbox was the first layout tool in CSS 

* flexbox has it's limitations: Flexbox only deals with 1-dimestion at a time.

* Grid enables you to create a grid. This means that you can work on both the vertical and horizontal axis at the same time. This opens up new layout possibilites that you simply don't have with just flexbox (or they were very dificult to make work). 

* using CSS grid also enables you to simply the HTML markup. You don't have to think so hard about how content needs to be grouped, resulting in much "flatter" HTML. 

* while CSS Grid simplifies the markup it does come with addded complexitiy: 
   * grid-template-columns 
   * grid-template-rows 
   * grid-auto-columns 
   * grid-auto-rows 
   * grid-column-start
   * grid-column-end 
   * grid-row-start
   * grid-row-end 
   * grid-template-areas 
   * grid-gap 
   * minmax() 
   * repeat() 
   * fr 
   * & more.....  


Setting up a basic grid: 

* you can define a grid by, on the parent, declaring grid-template-rows and grid-template-columns. 

* to set the widths for columns (or heights for your rows), all you need to do is to place as many values as needed, sepeated by a space: 

         grid-template-columns: 100px 500px 100px ; 


* if you are declaring both rows and columns you can use the grid-template shorthand. The values start with the rows, then you use  / to start declaring columns: 

         grid-template: 100px 100px 500px / 300px 300px 100px ; 
         



Setting up a grid: 

* The first step to creating a grid is declaring display: grid on the parent element. This creates a new grid formatting context, similar to when you declare display: flex ; in many ways. 

* Margins now no longer collapse and the direct children of the element become grid items. 

* similar to flexbox, when you create a new grid container, the flex children will fall onto the grid 

* the parent then becomes the grid container and turns it into a grid right away & the children will fall onto that grid. 


* the only change you will see at first, is that the margin will no longer    collapse.  

body {
    display: grid;
} 

* to properly use CSS Grid, you need to define rows & columns. 

* because flexbox only deals with one dimesion, you don't have to worry about rows and columns. you can just switch back & forth with flex-direction. 

* With Grid you have both. You can explicitly create them and then place items within the grid that you have created. 

* grid-template-columns = define how big you want each column to be: 
      grid-template-columns: 200px 200px 350px ; 


* grid-template-rows = add rows : 
      grid-template-rows: 50px 200px ; 


column = define width of column 

rows = define height of each row. 



placing items on the grid: 

* you can tell grid items where they live within their parent's grid with the following properties: 

      * grid-column-start

      * grid-column-end 

      * grid-row-start 

      * grid-row-end 


* these 4 properties are used on the flex item not on the flex parent. 



