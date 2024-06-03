using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers.Template
{
    public class FormController : Controller
    {
        public Task<Response> Index()
        {
            return Task.FromResult(Inertia.Render("Forms/FormControl"));
        }

        public Task<Response> FormControl()
        {
            return Task.FromResult(Inertia.Render("Forms/FormControl"));
        }

        public Task<Response> Select()
        {
            return Task.FromResult(Inertia.Render("Forms/Select"));
        }

        public Task<Response> ChecksRadios()
        {
            return Task.FromResult(Inertia.Render("Forms/ChecksRadios"));
        }

        public Task<Response> Range()
        {
            return Task.FromResult(Inertia.Render("Forms/Range"));
        }

        public Task<Response> InputGroup()
        {
            return Task.FromResult(Inertia.Render("Forms/InputGroup"));
        }

        public Task<Response> FloatingLabels()
        {
            return Task.FromResult(Inertia.Render("Forms/FloatingLabels"));
        }

        public Task<Response> Layout()
        {
            return Task.FromResult(Inertia.Render("Forms/Layout"));
        }

        public Task<Response> Validation()
        {
            return Task.FromResult(Inertia.Render("Forms/Validation"));
        }
    }
}
