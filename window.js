function OnStart()
{
app.SetScreenMode( "game" )
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

     web = app.CreateWebView( 1, 1, "Progress" );
     web.SetOnProgress( web_OnProgess );
     lay.AddChild( web );

     app.AddLayout( lay );
//web.SetUserAgent( " Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36")
 web.LoadUrl( "https://flutlab.io/ide/f38de2b3-bf16-4a83-9cdb-1b817ff520b3" );
}

function web_OnProgess( progress )
{
     app.Debug( "progress = " + progress );
}