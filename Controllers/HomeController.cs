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
        ViewData["Description"] = "Portfolio van Harmen van der Meijden, Product Designer met een achtergrond in software engineering, software architectuur en administratieve SaaS software.";
        ViewData["Canonical"] = "https://www.harmenvandermeijden.nl/";
        ViewData["OgTitle"] = "Harmen van der Meijden | Product Designer";
        ViewData["OgDescription"] = "Product Designer met een achtergrond in software engineering, software architectuur en administratieve SaaS software.";
        ViewData["OgImage"] = "/assets/portrait/harmen-portrait-cutout.png";
        ViewData["StructuredData"] = """
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Harmen van der Meijden",
          "jobTitle": "Product Designer",
          "description": "Product Designer met ervaring in software engineering, software architectuur en administratieve SaaS software.",
          "image": "/assets/portrait/harmen-portrait-cutout.png",
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
