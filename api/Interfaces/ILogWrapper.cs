using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace First_WebAPI.Interfaces
{
    public interface ILogWrapper
    {
        void Log(Exception ex);
    }
}
