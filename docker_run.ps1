<# Set-PSDebug -Trace 1 #>

docker run -d -p 80:3000 tickets_app_ssr

Write-Host "Press any key to continue..."
$Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
