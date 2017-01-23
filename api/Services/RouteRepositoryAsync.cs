using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using First_WebAPI.Data;
using First_WebAPI.Interfaces;
using First_WebAPI.Models;

namespace First_WebAPI.Services
{
    public class RouteRepositoryAsync : IRepository
    {
        //This class adds Async functionality to the Retrieval Methods by adding Task.Run() - The writes already utilize the async methods built into Entity Framework 
        private RouteRaterEntities routeEntity = new RouteRaterEntities();

        public IEnumerable<Route> RetrieveAllRoutes()
        {
            try
            {
                return (from r in routeEntity.Routes
                        where r.IsRouteActive == true
                        select r).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<IEnumerable<Route>> RetrieveAllRoutesAsync()
        {
            try
            {
                return await Task.Run(() => (from r in routeEntity.Routes
                                             where r.IsRouteActive == true
                                             select r).ToList());
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Gym> RetrieveGyms()
        {
            var gyms = (from g in routeEntity.Gyms
                        where g.GymName != null
                        select g).ToList();

            return gyms;
        }

        public async Task<Route> CreateRouteAsync(Route newRoute)
        {
            try
            {
                routeEntity.Routes.Add(newRoute);
                await routeEntity.SaveChangesAsync();
                return newRoute;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //Searches for an existing route and updates it
        public async Task<string> UpdateRouteAsync(Route updatedRoute)
        {
            try
            {
                var existingRoute = routeEntity.Routes.FirstOrDefault(x => x.Route_Id == updatedRoute.Route_Id);
                if (existingRoute != null)
                {
                    existingRoute = updatedRoute;
                    await routeEntity.SaveChangesAsync();
                    return existingRoute.RouteName;
                }
                return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Route RetrieveRoute(int routeId)
        {
            var route = routeEntity.Routes.Where(r => r.Route_Id == routeId).FirstOrDefault();

            return route;
        }

        public Task<string> DeleteRoute(int routeId)
        {
            throw new NotImplementedException();
        }

        Task<IEnumerable<Gym>> IRepository.RetrieveGyms()
        {
            throw new NotImplementedException();
        }

        public Gym RetrieveGym(int gymId)
        {
            var gym = routeEntity.Gyms.Where(g => g.Gym_Id == gymId).FirstOrDefault();

            return gym;
        }

        public Task<int> CreateGym(Gym newGym)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateGym(Gym gym)
        {
            throw new NotImplementedException();
        }
    }
}