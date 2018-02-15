<%@ Page language="C#" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<WebPartPages:AllowFraming ID="AllowFraming" runat="server" />

<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://momentjs.com/downloads/moment.js"></script>
    <script src="https://momentjs.com/downloads/moment-with-locales.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Handlee" rel="stylesheet">
    <script type="text/javascript" src="/_layouts/15/MicrosoftAjax.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>

    
    <script type="text/javascript" src="../Scripts/script.js"></script>
    <script src="../Scripts/scripttomorow.js"></script>
    <script src="../Scripts/weather.js"></script>
    <link href="../Content/style.css" rel="stylesheet">

    <title>Kalender Slide</title>
    <style>
        #wcity{font-size:30px;}
    </style>
</head>
<body>

<section id="slideshow">
        <div id="slidewindow">
          
                <div class=" wrap idag">
                        <center>     
                        <span id="title">idag</span>
                        </center>           
                        <span id="year"></span>
                        <span id="v"></span>
                        <span id="vday"></span>
                        <span id="day"></span>
                        <span id="month"></span>
                        <span id="namn"></span>
                        <span id="flag"></span>  
                    </div>
            
            
          
          
            
                    <div class=" wrap imorgon">
                            <center>     
                            <span id="title">imorgon</span>
                            </center>                    
                            <span id="year"></span>
                            <span id="v"></span>
                            <span id="vday"></span>
                            <span id="day"></span>
                            <span id="month"></span>
                            <span id="namn"></span>
                            <span id="flag"></span>  
                        </div>

           
              
            <div class=" wrap weather">  
                <center>   
                    
                <span id="title">Vädret idag</span>
                </center>
                
                <span class="iconcontainer"><center class="icon"></center></span>
                <span id="grader"><center class="vederet"></center></span>
                <br/><br/>
                <span ><center id="wcity"></center></span>
            </div>

        </div>
        <div id="controls">
          <a id="next">
            <div></div>
          </a>
          <ul id="dots"></ul>
          <a id="prev">
            <div></div>
          </a>
        </div>
      </section>

        
    
        

    
</body>
</html>