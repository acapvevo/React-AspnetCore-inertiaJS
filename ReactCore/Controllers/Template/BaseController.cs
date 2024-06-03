using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers.Template
{
    public class BaseController : Controller
    {
        public Task<Response> Index()
        {
            return Task.FromResult(Inertia.Render("Base/Accordion"));
        }

        public Task<Response> Accordion()
        {
            return Task.FromResult(Inertia.Render("Base/Accordion"));
        }

        public Task<Response> Breadcrumbs()
        {
            return Task.FromResult(Inertia.Render("Base/Breadcrumbs"));
        }

        public Task<Response> Cards()
        {
            return Task.FromResult(Inertia.Render("Base/Cards"));
        }

        public Task<Response> Collapses()
        {
            return Task.FromResult(Inertia.Render("Base/Collapses"));
        }

        public Task<Response> Carousels()
        {
            return Task.FromResult(Inertia.Render("Base/Carousels"));
        }

        public Task<Response> Jumbtrons()
        {
            return Task.FromResult(Inertia.Render("Base/Jumbtrons"));
        }

        public Task<Response> ListGroups()
        {
            return Task.FromResult(Inertia.Render("Base/ListGroups"));
        }

        public Task<Response> Navbars()
        {
            return Task.FromResult(Inertia.Render("Base/Navbars"));
        }

        public Task<Response> Navs()
        {
            return Task.FromResult(Inertia.Render("Base/Navs"));
        }

        public Task<Response> Paginations()
        {
            return Task.FromResult(Inertia.Render("Base/Paginations"));
        }

        public Task<Response> Placeholders()
        {
            return Task.FromResult(Inertia.Render("Base/Placeholders"));
        }

        public Task<Response> Popovers()
        {
            return Task.FromResult(Inertia.Render("Base/Popovers"));
        }

        public Task<Response> Progress()
        {
            return Task.FromResult(Inertia.Render("Base/Progress"));
        }

        public Task<Response> Spinners()
        {
            return Task.FromResult(Inertia.Render("Base/Spinners"));
        }

        public Task<Response> Tables()
        {
            return Task.FromResult(Inertia.Render("Base/Tables"));
        }

        public Task<Response> Tooltips()
        {
            return Task.FromResult(Inertia.Render("Base/Tooltips"));
        }
    }
}
