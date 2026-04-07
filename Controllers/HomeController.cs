using Microsoft.AspNetCore.Mvc;
using PortfolioSite.Models;

namespace PortfolioSite.Controllers;

public class HomeController : Controller
{
    [HttpGet("")]
    [HttpGet("index.html")]
    public IActionResult Index()
    {
        ViewData["Title"] = "Harmen van der Meijden | Product Designer";
        ViewData["Description"] = "Harmen van der Meijden is Product Designer met ervaring in software engineering, architectuur, administratieve SaaS en operationeel leiderschap.";
        ViewData["Canonical"] = "https://www.harmenvandermeijden.nl/";
        ViewData["OgTitle"] = "Harmen van der Meijden | Product Designer";
        ViewData["OgDescription"] = "Product Designer met ervaring in software engineering, architectuur, administratieve SaaS en operationeel leiderschap.";
        ViewData["OgImage"] = "https://www.harmenvandermeijden.nl/assets/social/og-harmen-portrait-share.png";
        ViewData["StructuredData"] = """
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Harmen van der Meijden",
          "jobTitle": "Product Designer",
          "description": "Product Designer met ervaring in software engineering, software architectuur, administratieve SaaS software en operationeel leiderschap.",
          "image": "https://www.harmenvandermeijden.nl/assets/social/og-harmen-portrait-share.png",
          "sameAs": [
            "https://linkedin.com/in/harmen-van-der-meijden"
          ],
          "knowsAbout": [
            "Product Design",
            "Software Engineering",
            "Software Architecture",
            "Administratieve SaaS software",
            "API koppelingen met boekhoudsoftware",
            "AI-integratie",
            "Change management"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Metafoor Software - VBSonline"
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
