using Microsoft.AspNetCore.Mvc;

namespace PortfolioSite.Controllers;

public class PagesController : Controller
{
    [HttpGet("loopbaan")]
    [HttpGet("cv")]
    [HttpGet("loopbaan.html")]
    public IActionResult Loopbaan()
    {
        SetPageMeta(
            title: "Loopbaan en CV | Harmen van der Meijden",
            description: "De loopbaan van Harmen van der Meijden: van vroege programmeerdrang via MBO, HBO, Independer en wehkamp naar Metafoor Software en operationeel leiderschap.",
            canonical: "https://www.harmenvandermeijden.nl/loopbaan");
        return View();
    }

    [HttpGet("disc")]
    [HttpGet("disc.html")]
    public IActionResult Disc()
    {
        SetPageMeta(
            title: "DISC-resultaten | Harmen van der Meijden",
            description: "DISC-profiel van Harmen van der Meijden. Binnenkort aangevuld met inzichten over samenwerking, leiderschap en communicatie.",
            canonical: "https://www.harmenvandermeijden.nl/disc");
        return View();
    }

    [HttpGet("api-koppelingen")]
    [HttpGet("api-koppelingen.html")]
    public IActionResult ApiKoppelingen()
    {
        SetPageMeta(
            title: "API-koppelingen met boekhoudsoftware | Harmen van der Meijden",
            description: "Ervaring van Harmen van der Meijden met API-koppelingen, administratieve SaaS software en integraties met boekhoudpakketten in Nederland.",
            canonical: "https://www.harmenvandermeijden.nl/api-koppelingen");
        return View();
    }

    [HttpGet("ai-integratie")]
    [HttpGet("ai-integratie.html")]
    public IActionResult AiIntegratie()
    {
        SetPageMeta(
            title: "AI-integratie in organisaties | Harmen van der Meijden",
            description: "Visie en aanpak van Harmen van der Meijden op AI-integratie in organisaties, producten en operationele processen.",
            canonical: "https://www.harmenvandermeijden.nl/ai-integratie");
        return View();
    }

    [HttpGet("change-management")]
    [HttpGet("change-management.html")]
    public IActionResult ChangeManagement()
    {
        SetPageMeta(
            title: "Change management | Harmen van der Meijden",
            description: "Aanpak van Harmen van der Meijden op change management binnen softwareteams, productorganisaties en operationele verandering.",
            canonical: "https://www.harmenvandermeijden.nl/change-management");
        return View();
    }

    private void SetPageMeta(string title, string description, string canonical)
    {
        ViewData["Title"] = title;
        ViewData["Description"] = description;
        ViewData["Canonical"] = canonical;
        ViewData["OgTitle"] = title;
        ViewData["OgDescription"] = description;
        ViewData["OgImage"] = "/assets/portrait/harmen-portrait-cutout.png";
    }
}
