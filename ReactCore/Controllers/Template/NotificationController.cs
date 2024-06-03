using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers.Template
{
    public class NotificationController : Controller
    {
        public Task<Response> Index()
        {
            return Task.FromResult(Inertia.Render("Notifications/Alerts"));
        }

        public Task<Response> Alerts()
        {
            return Task.FromResult(Inertia.Render("Notifications/Alerts"));
        }

        public Task<Response> Badges()
        {
            return Task.FromResult(Inertia.Render("Notifications/Badges"));
        }

        public Task<Response> Modals()
        {
            return Task.FromResult(Inertia.Render("Notifications/Modals"));
        }

        public Task<Response> Toasts()
        {
            return Task.FromResult(Inertia.Render("Notifications/Toasts"));
        }
    }
}
