---
title: Restaurants
layout: default.liquid
pagination:
  data: restaurants
  size: 1
  alias: restaurant
permalink: "restaurants/{{ restaurant.Name | slug  }}/"
---

# {{ restaurant.Name }}

{{ restaurant.Description }}

## Opening hours

{% for hours in restaurant.restaurant_hours %}
{{ hours.day_interval }}<br/>
{{ hours.opening_hours }}
{% if hours.closing_hours %}<span>- {{ hours.closing_hours }}</span>{% endif %}
{% endfor %}

## Categories

{% for category in restaurant.categories %}
{{ category.Name}}
{% endfor %}
