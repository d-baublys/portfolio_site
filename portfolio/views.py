from django.shortcuts import render
from django.views.generic import View
from django.templatetags.static import static


class HomeView(View):
    def get(self, request):
        context = {
            "site_list": [
                {
                    "src": static("portfolio/images/ecommercepreview-1200w.png"),
                    "srcset": f"{static("portfolio/images/ecommercepreview-480w.png")} 480w, {static("portfolio/images/ecommercepreview-768w.png")} 768w, {static("portfolio/images/ecommercepreview-1200w.png")} 1200w",
                    "title": "E-commerce Site",
                    "alt": "E-commerce Site Preview",
                    "live_link": "https://db-wear.vercel.app/",
                    "github_link": "https://github.com/d-baublys/ecommerce-site",
                },
                {
                    "src": static("portfolio/images/taskapppreview-1200w.png"),
                    "srcset": f"{static("portfolio/images/taskapppreview-480w.png")} 480w, {static("portfolio/images/taskapppreview-768w.png")} 768w, {static("portfolio/images/taskapppreview-1200w.png")} 1200w",
                    "title": "Task App",
                    "alt": "Task App Preview",
                    "live_link": "https://task-management-app-bice-psi.vercel.app",
                    "github_link": "https://github.com/d-baublys/task-management-app",
                },
                {
                    "src": static("portfolio/images/blogpreview-1200w.png"),
                    "srcset": f"{static("portfolio/images/blogpreview-480w.png")} 480w, {static("portfolio/images/blogpreview-768w.png")} 768w, {static("portfolio/images/blogpreview-1200w.png")} 1200w",
                    "title": "Blog Site",
                    "alt": "Blog Site Preview",
                    "live_link": "https://db-blog.co.uk",
                    "github_link": "https://github.com/d-baublys/django_blog",
                },
                {
                    "src": static("portfolio/images/clonepreview-1200w.png"),
                    "srcset": f"{static("portfolio/images/clonepreview-480w.png")} 480w, {static("portfolio/images/clonepreview-768w.png")} 768w, {static("portfolio/images/clonepreview-1200w.png")} 1200w",
                    "title": "Blogger.com Clone",
                    "alt": "Blogger Clone Preview",
                    "live_link": "https://dbaublys.eu.pythonanywhere.com",
                    "github_link": "https://github.com/d-baublys/blogger_clone",
                },
            ]
        }

        return render(request, "portfolio/home.html", context)
