using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace First_WebAPI.Models
{
    public class RouteObject
    {
        public int Route_Id { get; set; }
        [Required(ErrorMessage ="RouteName is required.", AllowEmptyStrings =false)]
        public string RouteName { get; set; }
        [Required(ErrorMessage ="Gym is required.", AllowEmptyStrings =false)]
        public int Gym_Id { get; set; }
        [Required(ErrorMessage="Route Color is required", AllowEmptyStrings=false)]
        public string RouteColor { get; set; }
        //Commenting because you may walk up to a route with no setter name[Required(ErrorMessage="Route Setter is a required field.", AllowEmptyStrings=false)]
        public string RouteSetter { get; set; }
        public string RouteGrade { get; set; }
        public string RouteCommunityGrade { get; set; }//this will likely be a mean grade
        public float RoutePopularity { get; set; }//this will be an average
        public DateTime RouteCreatedDate { get; set; }
        public string RouteComments { get; set; }
        public bool IsRouteActive { get; set; }
        public List<byte[]> Pictures { get; set; }
    }
}