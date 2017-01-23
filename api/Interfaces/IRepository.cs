using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using First_WebAPI.Data;
using First_WebAPI.Models;

namespace First_WebAPI.Interfaces
{
    public interface IRepository
    {        
        IEnumerable<Route> RetrieveAllRoutes();
        Route RetrieveRoute(int routeId);
        Task<Route> CreateRouteAsync(Route newRoute);
        Task<string> UpdateRouteAsync(Route route);
        Task<string> DeleteRoute(int routeId);
        Task<IEnumerable<Gym>> RetrieveGyms();
        Gym RetrieveGym(int gymId);
        Task<int> CreateGym(Gym newGym);
        Task<int> UpdateGym(Gym gym);
    }
}
