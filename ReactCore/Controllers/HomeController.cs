using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers;


[Route("/")]
public class HomeController : Controller
{
    public Task<Response> Index()
    {
        return Task.FromResult(Inertia.Render("Dashboard/Dashboard"));
    }
}