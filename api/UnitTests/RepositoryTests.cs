using System.Linq;
using Xunit;
using First_WebAPI.Interfaces;
using First_WebAPI.Controllers;
using UnitTests;
using First_WebAPI.Models;
using System.Web.Http.Results;

namespace First_WebAPI.UnitTests
{

    public class RepositoryTests
    {
        private readonly IRepository _repository;

        public RepositoryTests()
        {
            _repository = new FakeRouteRepo();
        }
                
        [Fact]
        public void GetRoutes()
        { 
            //Arrange
            //_repository already created as a global

            //Act
            var routes = _repository.RetrieveAllRoutes();

            //Assert
            Assert.Equal(routes.Count(), 2);
        }

        [Fact]
        public void GetRoute()
        {
            var route = _repository.RetrieveRoute(2);

            Assert.NotNull(route);
            Assert.Equal("Red", route.RouteColor);
        }        
    }
}
