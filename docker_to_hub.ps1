#docker push veloxcr.azurecr.io/tickets/app:latest

#docker tag tickets_app southamerica-east1-docker.pkg.dev/veloxtickets-prod/dockerreposp/tickets_app:staging | Write-Host
docker tag tickets_app_ssr southamerica-east1-docker.pkg.dev/veloxtickets-prod/dockerreposp/tickets_app_ssr:staging | Write-Host

#docker push southamerica-east1-docker.pkg.dev/veloxtickets-prod/dockerreposp/tickets_app:staging
docker push southamerica-east1-docker.pkg.dev/veloxtickets-prod/dockerreposp/tickets_app_ssr:staging

Write-Host "Press any key to continue..."
$Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
