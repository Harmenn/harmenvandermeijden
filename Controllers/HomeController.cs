using Microsoft.AspNetCore.Mvc;
using PortfolioSite.Models;

namespace PortfolioSite.Controllers;

public class HomeController : Controller
{
    [HttpGet("")]
    [HttpGet("index.html")]
    public IActionResult Index()
    {
        ViewData["Title"] = "Harmen van der Meijden | Software architect, product owner en teamlead";
        ViewData["Description"] = "Software architect, product owner en teamlead met een achtergrond in C#/.NET, softwarearchitectuur, SaaS en teamleiding. Van Independer en wehkamp naar Metafoor Software, waar hij doorgroeide van engineer naar directielid.";
        ViewData["Canonical"] = "https://www.harmenvandermeijden.nl/";
        ViewData["OgTitle"] = "Harmen van der Meijden | Software architect, product owner en teamlead";
        ViewData["OgDescription"] = "Software architect, product owner en teamlead met een achtergrond in C#/.NET, softwarearchitectuur, SaaS en teamleiding.";
        ViewData["OgImage"] = "https://www.harmenvandermeijden.nl/assets/social/og-harmen-portrait-share.png";
        ViewData["StructuredData"] = """
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Harmen van der Meijden",
          "jobTitle": "Software architect, product owner en teamlead",
          "description": "Die-hard software engineer die product, architectuur en uitvoering verbindt en doorgroeide van engineer naar directielid binnen Metafoor Software.",
          "image": "https://www.harmenvandermeijden.nl/assets/social/og-harmen-portrait-share.png",
          "sameAs": [
            "https://linkedin.com/in/harmen-van-der-meijden"
          ],
          "knowsAbout": [
            "Product Ownership",
            "Software Engineering",
            "Software Architecture",
            "C# en .NET",
            "SaaS productontwikkeling",
            "Delivery",
            "Teamleiding",
            "Scrum en Professional Scrum Master I",
            "Operationeel leiderschap"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Metafoor Software - BRIXXonline"
          }
        }
        """;

        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = HttpContext.TraceIdentifier });
    }
}
