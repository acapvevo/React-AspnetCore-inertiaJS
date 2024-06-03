using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers.Template
{
    public class WidgetController : Controller
    {
        public Task<Response> Index()
        {
            return Task.FromResult(Inertia.Render("Widgets/Widgets"));
        }
    }
}
