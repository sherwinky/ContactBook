<!DOCTYPE html>
<html lang="en">
<head>
    <script type="text/javascript">
        var siteContext = "${_r.contextPath}";
    </script>
    [@webBundle path="/common/js/" type="js" /]
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    [#if _r.user??]
      [@webBundle path="/js/" type="js" /]
    [/#if]
    [@webBundle path="/css/" type="css" /]
</head>

<body>
[#if _r.user??]
    [@includeFrameContent /]
[#else]
    [@includeTemplate name="login.ftl"/]
[/#if]
</body>
</html>