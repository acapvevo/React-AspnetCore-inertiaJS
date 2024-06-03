using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers.Template
{
    public class NotificationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
