using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers.Template
{
    public class OtherController : Controller
    {
        public Task<Response> Index()
        {
            return Task.FromResult(Inertia.Render("Other/Login"));
        }

        public Task<Response> Login()
        {
            return Task.FromResult(Inertia.Render("Other/Login"));
        }

        public Task<Response> Register()
        {
            return Task.FromResult(Inertia.Render("Other/Register"));
        }

        public Task<Response> Page404()
        {
            return Task.FromResult(Inertia.Render("Other/Page404"));
        }

        public Task<Response> Page500()
        {
            return Task.FromResult(Inertia.Render("Other/Page500"));
        }
    }
}
