#docker push veloxcr.azurecr.io/velox4/app:latest

#docker tag velox4_app southamerica-east1-docker.pkg.dev/veloxtickets-prod/dockerreposp/velox4_app:staging | Write-Host
docker tag velox4_app_ssr southamerica-east1-docker.pkg.dev/veloxtickets-prod/dockerreposp/velox4_app_ssr:staging | Write-Host

#docker push southamerica-east1-docker.pkg.dev/veloxtickets-prod/dockerreposp/velox4_app:staging
docker push southamerica-east1-docker.pkg.dev/veloxtickets-prod/dockerreposp/velox4_app_ssr:staging

Write-Host "Press any key to continue..."
$Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
