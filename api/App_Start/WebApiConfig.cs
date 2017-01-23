using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using System.Net.Http.Headers;
using Microsoft.Practices.Unity;
using First_WebAPI.Services;
using First_WebAPI.Interfaces;
using First_WebAPI.Data;
using First_WebAPI.Models;

namespace First_WebAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            //Configure Unity Container and Register Types for DI
            var container = new UnityContainer();
            container.RegisterType<IRepository, RouteRepository>(new HierarchicalLifetimeManager());
            config.DependencyResolver = new UnityResolver(container);

            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));

            config.EnableCors();

            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new
                CamelCasePropertyNamesContractResolver();

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            AutoMapper.Mapper.Initialize(automapperConfig =>
            {
                automapperConfig.CreateMap<RouteObject, Route>().ReverseMap();
                automapperConfig.CreateMap<GymObject, Gym>().ReverseMap();
            });
        }
    }
}
