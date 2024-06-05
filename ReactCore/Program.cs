using InertiaCore.Extensions;
using SqlKata.Compilers;
using SqlKata.Execution;
using System.Data.SqlClient;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddInertia();

builder.Services.AddViteHelper(opt =>
{
    opt.PublicDirectory = "wwwroot";
    opt.BuildDirectory = "build";
    opt.ManifestFilename = "manifest.json";
});

builder.Services.AddTransient<QueryFactory>((e) =>
{
    var connection = new SqlConnection(builder.Configuration.GetConnectionString("DefaultConnection"));
    var compiler = new SqlServerCompiler();

    return new QueryFactory(connection, compiler);

});

builder.Services.AddControllersWithViews();

var app = builder.Build();

app.UseInertia();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}"
);

app.MapFallbackToFile("index.html");

app.Run();
