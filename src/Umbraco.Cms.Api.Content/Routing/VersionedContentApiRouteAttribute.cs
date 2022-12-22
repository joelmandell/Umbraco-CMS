﻿using Umbraco.Cms.Api.Common.Routing;

namespace Umbraco.Cms.Api.Content.Routing;

public class VersionedContentApiRouteAttribute : BackOfficeRouteAttribute
{
    public VersionedContentApiRouteAttribute(string template)
        : base($"content/api/v{{version:apiVersion}}/{template.TrimStart('/')}")
    {
    }
}
