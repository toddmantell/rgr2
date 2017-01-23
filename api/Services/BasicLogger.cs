using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using First_WebAPI.Interfaces;

namespace First_WebAPI.Services
{
    public class BasicLogger : ILogWrapper
    {
        public void Log(Exception ex)
        {
            Console.Write(ex);
        }
    }
}