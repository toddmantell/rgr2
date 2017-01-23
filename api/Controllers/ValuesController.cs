using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.OData;
using First_WebAPI.Services;
using First_WebAPI.Models;
using First_WebAPI.Data;
using First_WebAPI.Interfaces;
using System.Web.Http.Description;
using System.Threading.Tasks;
using Microsoft.Practices.EnterpriseLibrary.Logging;
using AutoMapper;


namespace First_WebAPI.Controllers
{
    [EnableCors("http://localhost:63533", "*", "*")]
    //[Authorize]
    public class ValuesController : ApiController
    {
        private IRepository _repo;
        private readonly ILogWrapper _logger;

        public ValuesController(IRepository repo)
        {
            _repo = repo;
            _logger = new BasicLogger();

            AutoMapper.Mapper.Initialize(automapperConfig =>
            {
                automapperConfig.CreateMap<RouteObject, Route>().ReverseMap();
                automapperConfig.CreateMap<GymObject, Gym>().ReverseMap();
            });
        }


        [EnableQuery()]//because we will use OData to filter the entire collection of Routes
        [ResponseType(typeof(List<Route>))]//for the API documentation
        [Route("api/GetRoutes")]
        // GET api/GetRoutes        
        public IHttpActionResult GetRoutes()
        {
            try
            {
                var routes = _repo.RetrieveAllRoutes();
                return Ok(Mapper.Map<IEnumerable<RouteObject>>(routes));
            }
            catch (Exception ex)
            {
                _logger.Log(ex);
                return InternalServerError(ex);
            }
        }

        //returns individual route details based on Id
        // GET api/values/5
        [Route("api/GetRoute/{id}")]
        public IHttpActionResult GetRoute(int id)
        {
            try
            {
                var route = _repo.RetrieveRoute(id);
                
                return Ok(Mapper.Map<RouteObject>(route));
            }
            catch (Exception ex)
            {
                _logger.Log(ex);
                return NotFound();
            }
        }

        [Route("api/GetGyms")]
        public IHttpActionResult GetGyms()
        {
            try
            {                
                return Ok(_repo.RetrieveGyms());
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        [Route("api/GetGym/{id}")]
        public IHttpActionResult GetGym(int id)
        {
            try
            {
                var gym = _repo.RetrieveGym((id));
                var mappedGym = Mapper.Map<GymObject>(gym);
                return Ok(mappedGym);
            }
            catch (Exception ex)
            {
                //Logger.Write($"Exception when attempting to retrieve a gym: {ex}");
                return NotFound();
            }
        }

        [Route("api/AddRoute")]
        // POST api/values
        public async Task<IHttpActionResult> Post([FromBody]RouteObject route)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newRoute = Mapper.Map<Route>(route);
                    var result = await _repo.CreateRouteAsync(newRoute);
                    if (result != null)
                    {
                        var createdRoute = Mapper.Map<RouteObject>(result);               
                        return Created<RouteObject>($"api/AddRoute/{createdRoute.RouteName}", createdRoute);
                    }
                }
                
                return InternalServerError();
            }
            catch (Exception ex)
            {
                _logger.Log(ex);
                return NotFound();
            }
        }

        [Route("api/update/{id}")]
        // PUT api/values/5
        public async Task<IHttpActionResult> Put(int id, [FromBody]RouteObject route)
        {
            try
            {
                if (route == null || !ModelState.IsValid)
                {
                    return BadRequest("Must provide a valid route");
                }

                var routeToUpdate = AutoMapper.Mapper.Map<Route>(route);
                string newRouteName = await _repo.UpdateRouteAsync(routeToUpdate);

                if (string.IsNullOrEmpty(newRouteName))
                {
                    return InternalServerError(new ArgumentNullException());
                }

                return Ok(newRouteName);//Return the new route for display (and probably toastr on the front end)
            }
            catch (Exception ex)
            {
                _logger.Log(ex);
                return InternalServerError();
            }
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
