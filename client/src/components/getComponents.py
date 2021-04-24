import os

# This is a simple script to update the routes list in RouteManager

def helper(component, header):
    try:
        if component.index(header) != -1:
            lower = component.lower()
            return lower[0:len(header)] + "/" + lower[len(header):len(lower)]
    except:
        return None

def route(component):
    if component == "Landing": return ""
    res = helper(component, "Staff")
    res = helper(component, "Admin") if res is None else res
    return res if res is not None else component.lower()

def proc(f):
    if len(f[0]) <= 1: return
    component = f[0][2:len(f[0])]
    if(component == "temp" or component == "NotFound"): return
    print('"/' + route(component) + '": require(".' + (("/" + component) * 2) + '").default,')

[proc(f) for f in os.walk(".")]
