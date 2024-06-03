using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers.Template
{
    public class ThemeController : Controller
    {
        public Task<Response> Index()
        {
            return Task.FromResult(Inertia.Render("Theme/Colors"));
        }

        public Task<Response> Colors()
        {
            return Task.FromResult(Inertia.Render("Theme/Colors"));
        }

        public Task<Response> Typography()
        {
            return Task.FromResult(Inertia.Render("Theme/Typography"));
        }
    }
}
