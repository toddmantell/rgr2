using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using First_WebAPI.Services;
using First_WebAPI.Data;
using First_WebAPI.Models;
using First_WebAPI.Interfaces;

namespace UnitTests
{
    class FakeRouteRepo : IRepository
    {
        public List<Route> FakeRouteCollection = new List<Route>(){
            new Route {
                Route_Id = 1,
                RouteColor = "Blue",
                RouteGrade = "5.14c",
                Comments = "This route is so hard, but great movement!",
                Gym_Id = 1
                },
            new Route {
                Route_Id = 2,
                RouteColor = "Red",
                RouteGrade = "5.11a",
                Comments = "This didn't flow very well.",
                Gym_Id = 25
            }
        };

        public List<Gym> FakeGymCollection = new List<Gym>()
        {
            new Gym {
                Gym_Id = 1,
                GymName = "Vertical Endeavors - Glendale Heights",
                GymAddress = ""
            },
            new Gym {
                Gym_Id = 2,
                GymName = "First Ascent - Avondale",
                GymAddress = ""
            },
            new Gym {
                Gym_Id = 3,
                GymName = "First Ascent - Uptown",
                GymAddress = ""
            }
            
        };

        public IEnumerable<Route> RetrieveAllRoutes()
        {
            return FakeRouteCollection;
        }

        public Route RetrieveRoute(int routeId)
        {
            var route = FakeRouteCollection.Where(fakeRoute => fakeRoute.Route_Id == routeId).FirstOrDefault();

            return route;
        }

        public Task<int> CreateGym(Gym newGym)
        {
            throw new NotImplementedException();
        }

        public async Task<Route> CreateRouteAsync(Route newRoute)
        {
            try
            {
                await Task.Run(() => FakeRouteCollection.Add(newRoute));
                return newRoute;
            }
            catch (Exception ex)
            {
                throw;
            }            
        }

        public async Task<string> UpdateRouteAsync(Route route)
        {
            try
            {
                var result = await Task.Run(() => {
                    var routeIndex = FakeRouteCollection.FindIndex(routeInList => routeInList.Route_Id == route.Route_Id);
                    if (routeIndex != -1)
                    {
                        FakeRouteCollection[routeIndex] = route;
                        return route.RouteName;
                    }
                    else
                    {
                        return null;
                    }                    
                });

                return result;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public Task<string> DeleteRoute(int routeId)
        {
            throw new NotImplementedException();
        }

        public Gym RetrieveGym(int gymId)
        {
            var gym = FakeGymCollection.Where(fakeGym => fakeGym.Gym_Id == gymId).FirstOrDefault();

            return gym;
        }

        public Task<IEnumerable<Gym>> RetrieveGyms()
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateGym(Gym gym)
        {
            throw new NotImplementedException();
        }

    }
    
}
