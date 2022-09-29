<# Set-PSDebug -Trace 1 #>

#docker-compose -f docker-compose.yml -f docker-compose.spa.yml build --no-cache --force-rm --compress --progress=plain | Write-Host
docker-compose -f docker-compose.yml -f docker-compose.ssr.yml build --no-cache --force-rm --compress --progress=plain | Write-Host

#docker image ls -f=reference="velox4_app" -q | ForEach-Object {
#  docker tag $_ veloxcr.azurecr.io/$_/app:latest | Write-Host
#}

Write-Host "Press any key to continue..."
$Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
