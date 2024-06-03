using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers.Template
{
    public class ChartController : Controller
    {
        public Task<Response> Index()
        {
            return Task.FromResult(Inertia.Render("Charts/Charts"));
        }

        public Task<Response> Charts()
        {
            return Task.FromResult(Inertia.Render("Charts/Charts"));
        }
    }
}
