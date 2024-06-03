using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers.Template
{
    public class IconController : Controller
    {
        public Task<Response> Index()
        {
            return Task.FromResult(Inertia.Render("Icons/Buttons"));
        }

        public Task<Response> CoreUIIcons()
        {
            return Task.FromResult(Inertia.Render("Icons/CoreUIIcons"));
        }

        public Task<Response> Flags()
        {
            return Task.FromResult(Inertia.Render("Icons/Flags"));
        }

        public Task<Response> Brands()
        {
            return Task.FromResult(Inertia.Render("Icons/Brands"));
        }
    }
}
