using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers.Template
{
    public class DashboardController : Controller
    {
        public Task<Response> Index()
        {
            return Task.FromResult(Inertia.Render("Dashboard/Dashboard"));
        }

        public Task<Response> Dashboard()
        {
            return Task.FromResult(Inertia.Render("Dashboard/Dashboard"));
        }
    }
}
