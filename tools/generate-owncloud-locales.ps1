param(
    [string]$ProjectRoot = "d:\\Work\\Gitea\\onlyoffice.com",
    [string]$OwnCloudResxDir = "d:\\Work\\Gitea\\www\\Web\\App_GlobalResources\\Integrations\\СonnectorOwnCloudResource",
    [string]$ConnectorsResxDir = "d:\\Work\\Gitea\\www\\Web\\App_GlobalResources\\Integrations\\ConnectorsResource"
)

$ErrorActionPreference = 'Stop'

# Inputs
$enJsonPath = Join-Path $ProjectRoot "public\\locales\\en\\office-for-owncloud.json"
$languages = @('de','fr','es','pt','cs','sr','it','nl','zh','ja','ru')

if (!(Test-Path $enJsonPath)) { throw "EN JSON not found: $enJsonPath" }

# Load EN JSON and preserve order of keys
$enJsonText = Get-Content -Raw -Path $enJsonPath -Encoding UTF8
$enObj = $enJsonText | ConvertFrom-Json
$orderedKeys = @($enObj.PSObject.Properties.Name)

# Mapping: en key -> source resx and resx key name
$map = @{
  'PageTitle' = @{ source='owncloud'; key='OwnCloudSeoTitle' }
  'PageDescription' = @{ source='owncloud'; key='OwnCloudSeoDescription' }
  'OnlineOfficeForOwnCloud' = @{ source='owncloud'; key='OwnCloudTitle' }
  'CollaborateOnDocuments' = @{ source='owncloud'; key='OwnCloudSeoDescription' }
  'EditAndCoAuthorOfficeDocuments' = @{ source='owncloud'; key='EditAndCoauthor' }
  'DocumentsTab1Label' = @{ source='owncloud'; key='CreateAndEdit' }
  'DocumentsTab2Label' = @{ source='owncloud'; key='BuildEdit' }
  'DocumentsTab3Label' = @{ source='owncloud'; key='AnnotateAndComment' }
  'DocumentsTab4Label' = @{ source='owncloud'; key='ConvertNonOOXML' }
  'DocumentsTab5Label' = @{ source='owncloud'; key='ShareFilesWith' }
  'DocumentsTab6Label' = @{ source='owncloud'; key='CollaborateOnDocuments' }
  'DocumentsTab7Label' = @{ source='owncloud'; key='ProtectDocuments' }
  'FreeAppsHeading' = @{ source='owncloud'; key='AccessAndEdit' }
  'FreeAppsDesktopText' = @{ source='owncloud'; key='EditAndCoedit' }
  'FreeAppsMobileText' = @{ source='owncloud'; key='ReadAndEdit' }
  'GetFreeDesktopApps' = @{ source='owncloud'; key='GetFreeDesktopApps' }
  'MarketplaceConnectorTitle' = @{ source='owncloud'; key='DesignedForSeamless' }
  'MarketplaceConnectorDescription' = @{ source='owncloud'; key='GetTheAppForOwnCloud' }
  'WhyOO' = @{ source='connectors'; key='WhyOOqm' }
  'FeaturesFormats' = @{ source='owncloud'; key='SupportForMore' }
  'FeaturesCoEditing' = @{ source='owncloud'; key='RealTimeAndParagraph' }
  'FeaturesAIHelper' = @{ source='owncloud'; key='ARobustSetOfEditing' }
  'FeaturesSecurity' = @{ source='owncloud'; key='EnhancedSecurity' }
  'FeaturesConfiguration' = @{ source='owncloud'; key='EasyConfiguration' }
  'FeaturesFree' = @{ source='owncloud'; key='FreeCommunityVersion' }
  'FeaturesPermissions' = @{ source='owncloud'; key='AdvancedSharing' }
  'FeaturesCustomization' = @{ source='owncloud'; key='CustomizationOfTheEditor' }
  'FeaturesSupport' = @{ source='owncloud'; key='SupportForOwnCloudWeb' }
  'GetStarted' = @{ source='none'; key=$null }
  'HowToStart' = @{ source='connectors'; key='HowToGetStarted' }
  'HowToStartStep1' = @{ source='owncloud'; key='DeployOO' }
  'HowToStartStep2' = @{ source='owncloud'; key='GetTheIntegration' }
  'HowToStartStep3' = @{ source='owncloud'; key='ConfigureTheIntegration' }
  'HowToConnect' = @{ source='owncloud'; key='ConfiguringONLYOFFICE' }
  'ReadDetailedInstructions' = @{ source='connectors'; key='ReadIstructionsHelpCenter' }
  'PartnerHeading' = @{ source='owncloud'; key='AreYouAnOwnCloudPartner' }
  'PartnerText' = @{ source='none'; key=$null }
  'HowCzechTVReplaced' = @{ source='owncloud'; key='HowCzechTVReplaced' }
  'HowOOandOwnCloudIntegration' = @{ source='owncloud'; key='HowONLYOFFICEAndOwnCloud' }
  'HowSWITCHIntegrated' = @{ source='owncloud'; key='HowSWITCHIntegratedONLYOFFICE' }
  'ReadTheFullStory' = @{ source='owncloud'; key='ReadTheFullStory' }
  'NeedAnAppToConnect' = @{ source='connectors'; key='NeedAnAppToConnect' }
}

function Load-ResxXml($path) {
  if (Test-Path $path) { return [xml](Get-Content -Raw -Path $path -Encoding UTF8) }
  else { return $null }
}

function Get-ResxValue([xml]$xml, [string]$resxKey) {
  if (-not $xml) { return $null }
  $node = $xml.root.data | Where-Object { $_.name -eq $resxKey } | Select-Object -First 1
  if ($node -and $node.value) { return ($node.value.'#text') }
  return $null
}

function Normalize-Placeholders([string]$text) {
  if ($null -eq $text) { return $null }
  $text = $text -replace '\{0\}', '<0>'
  $text = $text -replace '\{1\}', '</0>'
  return $text
}

foreach ($lang in $languages) {
  $ownPath = Join-Path $OwnCloudResxDir ("ConnectorOwnCloudResource.$lang.resx")
  $connPath = Join-Path $ConnectorsResxDir ("ConnectorsResource.$lang.resx")

  $ownXml = Load-ResxXml $ownPath
  $connXml = Load-ResxXml $connPath

  $out = [ordered]@{}

  foreach ($k in $orderedKeys) {
    $enVal = $enObj.$k
    $spec = $map[$k]
    $val = $null

    if ($spec) {
      switch ($spec.source) {
        'owncloud'   { $val = Get-ResxValue $ownXml $spec.key }
        'connectors' { $val = Get-ResxValue $connXml $spec.key }
        default { $val = $null }
      }
    }

    if ([string]::IsNullOrEmpty($val)) {
      # Fallback to EN
      $val = $enVal
    }

    $val = Normalize-Placeholders $val

    $out[$k] = $val
  }

  $outDir = Join-Path $ProjectRoot ("public\\locales\\$lang")
  if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }
  $outPath = Join-Path $outDir "office-for-owncloud.json"

  $json = $out | ConvertTo-Json -Depth 10 -Compress:$false
  # Ensure UTF8 without BOM
  [System.IO.File]::WriteAllText($outPath, $json, (New-Object System.Text.UTF8Encoding($false)))
  Write-Host "Written: $outPath"
}
