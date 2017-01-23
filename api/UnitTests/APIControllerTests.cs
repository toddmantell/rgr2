using First_WebAPI.Controllers;
using First_WebAPI.Interfaces;
using First_WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using Xunit;

namespace UnitTests
{
    public class APIControllerTests
    {
        private readonly IRepository _repository;
        private ValuesController controller;

        public APIControllerTests()
        {
            _repository = new FakeRouteRepo();
            controller = new ValuesController(_repository);
        }

        [Fact]
        public void GetRouteAPIControllerShouldReturnNotNullRouteObject()
        {
            var actionResult = controller.GetRoute(1);
            var contentResult = actionResult as OkNegotiatedContentResult<RouteObject>;

            Assert.IsType<RouteObject>(contentResult.Content);
            Assert.NotNull(contentResult.Content);
        }

        [Fact]
        public void GetRouteAPIControllerShouldReturnRouteObjectProperties()
        {
            var actionResult = controller.GetRoute(1);
            var contentResult = actionResult as OkNegotiatedContentResult<RouteObject>;

            Assert.Equal("Blue", contentResult.Content.RouteColor);
            Assert.Equal(1, contentResult.Content.Route_Id);
        }

        [Fact]
        public void GetRouteAPIControllerShouldReturnCorrectGym()
        {
            var actionResult = controller.GetRoute(2);
            var contentResult = actionResult as OkNegotiatedContentResult<RouteObject>;

            Assert.Equal("Red", contentResult.Content.RouteColor);
            Assert.Equal(25, contentResult.Content.Gym_Id);
        }

        [Fact]
        public void GetGymAPIControllerShouldReturnCorrectGym()
        { 
            var actionResult = controller.GetGym(2);
            var contentResult = actionResult as OkNegotiatedContentResult<GymObject>;

            Assert.Equal(2, contentResult.Content.Gym_Id);
        }

        [Fact]
        public async Task CreateRouteShouldReturnTheRoute()
        {
            var newRoute = new RouteObject() { RouteName = "Test Route",
                RouteSetter = "Test", Gym_Id = 2, RouteGrade = "5.11a", Route_Id = 3 };

            var expected = newRoute.RouteName;

            var actionResult = controller.Post(newRoute);
            var contentResult = await actionResult as CreatedNegotiatedContentResult<RouteObject>;

            Assert.NotNull(contentResult.Content.RouteName);
            Assert.Equal(expected, contentResult.Content.RouteName);
        }

        [Fact]
        public async Task UpdateRouteShouldReturnTheRouteName()
        {
            var updatedRoute = new RouteObject() { Route_Id = 2, RouteName = "Route Updated",
                RouteColor = "Grey", RouteComments = "This route has been updated"
            };

            var expected = updatedRoute.RouteComments;

            var actionResult = controller.Put(updatedRoute.Route_Id, updatedRoute);
            var contentResult = await actionResult as CreatedNegotiatedContentResult<string>;

            Assert.NotNull(contentResult);
            Assert.Equal(expected, contentResult.Content);
        }

        [Fact]
        public async Task UpdateRouteNotFoundShould()
        {
            var updatedRoute = new RouteObject()
            {
                Route_Id = 999,
                RouteName = "This Doesn't Exist",
                RouteColor = "Black"
            };

            var expected = "";
            var actionResult = await controller.Put(updatedRoute.Route_Id, updatedRoute);
            var actual = actionResult as CreatedNegotiatedContentResult<string>;

            Assert.Null(actual); //placeholder
        }
    }
}
