using Microsoft.AspNetCore.Mvc;
using PortfolioSite.Models;

namespace PortfolioSite.Controllers;

public class HomeController : Controller
{
    [HttpGet("")]
    [HttpGet("index.html")]
    public IActionResult Index()
    {
        ViewData["Title"] = "Harmen van der Meijden | Software Architect, Product Owner en Teamlead";
        ViewData["Description"] = "Harmen van der Meijden verbindt softwarearchitectuur, product ownership en delivery leadership voor software die echt moet werken.";
        ViewData["Canonical"] = "https://www.harmenvandermeijden.nl/";
        ViewData["OgTitle"] = "Harmen van der Meijden | Software Architect, Product Owner en Teamlead";
        ViewData["OgDescription"] = "Software architect, product owner en teamlead voor software die echt moet werken.";
        ViewData["OgImage"] = "https://www.harmenvandermeijden.nl/assets/social/og-harmen-portrait-share.png";
        ViewData["StructuredData"] = """
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Harmen van der Meijden",
          "jobTitle": "Software Architect, Product Owner en Teamlead",
          "description": "Die-hard software engineer die softwarearchitectuur, product ownership en uitvoering verbindt in administratieve SaaS, productontwikkeling en operationeel leiderschap.",
          "image": "https://www.harmenvandermeijden.nl/assets/social/og-harmen-portrait-share.png",
          "sameAs": [
            "https://linkedin.com/in/harmen-van-der-meijden"
          ],
          "knowsAbout": [
            "Product Ownership",
            "Software Engineering",
            "Software Architecture",
            "C# en .NET",
            "Administratieve SaaS software",
            "Delivery leadership",
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
