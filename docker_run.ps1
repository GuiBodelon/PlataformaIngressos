<# Set-PSDebug -Trace 1 #>

#docker run -d -p 80:80 velox4_app
docker run -d -p 80:3000 velox4_app_ssr

Write-Host "Press any key to continue..."
$Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
