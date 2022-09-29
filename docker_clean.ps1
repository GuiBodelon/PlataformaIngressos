<# Set-PSDebug -Trace 1 #>

docker container ls -a --no-trunc --format "{{json .}}" | foreach-object {
  $i = $_ | ConvertFrom-Json
  if($i.Names.IndexOf("velox4") -gt -1) {
    "x" | Write-Host
    docker container stop $i.ID | Write-Host
    docker container rm $i.ID | Write-Host
  }
}

docker image ls -a --no-trunc --format "{{json .}}" | foreach-object {
   $i = $_ | ConvertFrom-Json
   if($i.Repository.IndexOf("velox4") -gt -1) {
     docker image rm $i.ID -f | Write-Host
   }
}

Write-Host "Press any key to continue..."
$Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
