---
title: Restaurants
layout: default.liquid
pagination:
  data: restaurants
  size: 100
  alias: allRestaurants
---

# Restaurants

<ul>
{%- for restaurant in allRestaurants -%}
  <li><a href="/restaurants/{{ restaurant.Name | slug  }}/">{{ restaurant.Name }}</a></li>
{%- endfor -%}
</ul>
