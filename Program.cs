using PortfolioSite.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<SiteModeOptions>(builder.Configuration.GetSection("SiteMode"));
builder.Services.AddControllersWithViews();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.Use(async (context, next) =>
{
    var siteMode = context.RequestServices
        .GetRequiredService<Microsoft.Extensions.Options.IOptions<SiteModeOptions>>()
        .Value;

    if (siteMode.HideZzpMeuk)
    {
        var path = context.Request.Path.Value ?? string.Empty;
        var isHomepage =
            path == "/" ||
            path.Equals("/index.html", StringComparison.OrdinalIgnoreCase) ||
            path.Equals("/home", StringComparison.OrdinalIgnoreCase) ||
            path.Equals("/home/index", StringComparison.OrdinalIgnoreCase);

        if (!isHomepage)
        {
            context.Response.Redirect("/");
            return;
        }
    }

    await next();
});

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
