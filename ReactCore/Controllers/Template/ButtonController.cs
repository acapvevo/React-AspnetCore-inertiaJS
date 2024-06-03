using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers.Template
{
    public class ButtonController : Controller
    {
        public Task<Response> Index()
        {
            return Task.FromResult(Inertia.Render("Buttons/Buttons"));
        }

        public Task<Response> Buttons()
        {
            return Task.FromResult(Inertia.Render("Buttons/Buttons"));
        }

        public Task<Response> ButtonGroups()
        {
            return Task.FromResult(Inertia.Render("Buttons/ButtonGroups"));
        }

        public Task<Response> Dropdowns()
        {
            return Task.FromResult(Inertia.Render("Buttons/Dropdowns"));
        }
    }
}
