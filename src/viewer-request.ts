function handler(event: AWSCloudFrontFunction.Event) {
  var request = event.request;
  var url = request.uri;
  var countryCode = request.headers["cloudfront-viewer-country"].value.toLowerCase();

  if (countryCode !== "kr" && !url.startsWith("/en")) {
    var response: AWSCloudFrontFunction.Response = {
      statusCode: 302,
      statusDescription: "Found",
      headers: {
        location: { value: `/en${url}` },
      },
    };

    return response;
  }

  return request;
}
