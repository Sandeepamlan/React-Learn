## Login to Looker
### Toggle Development mode button > Develop > qwiklabs-ecommerce 

## Open Inside of the order_items view
>Add this code
```

dimension: profit {
label: "profit"
description: "sgggf"
type: number
sql: ${sale_price} - ${products.cost} ;;
value_format_name: usd
}

measure: total_profit {
label: "total_profit"
description: "sgggf sum"
type: sum
sql: ${profit} ;;
value_format_name: usd
}

```

## Open training_ecommerce.model add below lines of code. (change the NAME_DATAGROUP from LAB)
```
datagroup: NAME_DATAGROUP {
max_cache_age: "168 hours"
}

persist_with: NAME_DATAGROUP

```
## Add this code on Model (change the NAME_DATAGROUP from LAB)
```
explore: +order_items {
label: ""
aggregate_table: weekly_aggregate_revenue_profit {
query: {
dimensions: [order_items.created_date]
measures: [order_items.total_revenue, order_items.total_profit]
}
materialization: {
datagroup_trigger: NAME_DATAGROUP
increment_key: "created_date"
} } }
```
>Click on save > Validate LookMl and then Commit Changes and Push, then click Deploy to Production.

## Open Explore, select Order Items > Created Date > Month, Total Revenue, and Total Profit. Make sure your Created Month column is in Ascending order
>Select a Line visualization. Click on run.
>Save the visualization as a look and give the name to the look as mentioned in the lab instruction page.

### TASK 3
## Create a new view file and give a name as mentioned in the lab
> replace this code and change the VIEW_NAME Given in the LAB
```
view: VIEW_NAME {
extension: required

dimension: id {
primary_key: yes
type: number
sql: ${TABLE}.id ;;
}

dimension: email {
type: string
sql: ${TABLE}.email ;;
}

dimension: first_name {
type: string
sql: ${TABLE}.first_name ;;
}

dimension: last_name {
type: string
sql: ${TABLE}.last_name ;;
}

dimension: latitude {
type: number
sql: ${TABLE}.latitude ;;
}

dimension: longitude {
type: number
sql: ${TABLE}.longitude ;;
}
}

```
## Task 4
>Replace this code with default one in USERS.view 
```
view: users {
  sql_table_name: `cloud-training-demos.looker_ecomm.users`
    ;;
  drill_fields: [id]

  dimension: id {
    primary_key: yes
    type: number
    hidden: yes
    sql: ${TABLE}.id ;;
  }

  dimension: age {
    type: number
    sql: ${TABLE}.age ;;
  }

  dimension: city {
    type: string
    sql: ${TABLE}.city ;;
  }

  dimension: country {
    type: string
    map_layer_name: countries
    sql: ${TABLE}.country ;;
  }

  dimension_group: created {
    type: time
    timeframes: [
      raw,
      time,
      date,
      week,
      month,
      quarter,
      year
    ]
    sql: ${TABLE}.created_at ;;
  }

  dimension: email {
    type: string
    hidden: yes
    sql: ${TABLE}.email ;;
  }

  dimension: first_name {
    type: string
    hidden: yes
    sql: ${TABLE}.first_name ;;
  }

  dimension: gender {
    type: string
    sql: ${TABLE}.gender ;;
  }

  dimension: last_name {
    type: string
    hidden: yes
    sql: ${TABLE}.last_name ;;
  }

  dimension: latitude {
    type: number
    hidden: yes
    sql: ${TABLE}.latitude ;;
  }

  dimension: longitude {
    type: number
    hidden: yes
    sql: ${TABLE}.longitude ;;
  }

  dimension: state {
    type: string
    sql: ${TABLE}.state ;;
    map_layer_name: us_states
  }

  dimension: traffic_source {
    type: string
    sql: ${TABLE}.traffic_source ;;
  }

  dimension: zip {
    type: zipcode
    sql: ${TABLE}.zip ;;
  }

  measure: count {
    type: count
    drill_fields: [id, last_name, first_name, events.count, order_items.count]
  }
}

```

## Task 4

>Open users.view file and replace this code
> change GROUP_NAME from LAB

```
view: users {
  sql_table_name: `cloud-training-demos.looker_ecomm.users`
    ;;
  drill_fields: [id]

  dimension: id {
    primary_key: yes
    type: number
    hidden: yes
    sql: ${TABLE}.id ;;
  }

  dimension: age {
    type: number
    group_label:"GROUP_NAME"
    sql: ${TABLE}.age ;;
  }

  dimension: city {
    type: string
    group_label:"GROUP_NAME"
    sql: ${TABLE}.city ;;
  }

  dimension: country {
    type: string
    group_label:"GROUP_NAME"
    map_layer_name: countries
    sql: ${TABLE}.country ;;
  }

  dimension_group: created {
    type: time
    timeframes: [
      raw,
      time,
      date,
      week,
      month,
      quarter,
      year
    ]
    sql: ${TABLE}.created_at ;;
  }

  dimension: email {
    type: string
    hidden: yes
    sql: ${TABLE}.email ;;
  }

  dimension: first_name {
    type: string
    hidden: yes
    sql: ${TABLE}.first_name ;;
  }

  dimension: gender {
    type: string
    sql: ${TABLE}.gender ;;
  }

  dimension: last_name {
    type: string
    hidden: yes
    sql: ${TABLE}.last_name ;;
  }

  dimension: latitude {
    type: number
    hidden: yes
    sql: ${TABLE}.latitude ;;
  }

  dimension: longitude {
    type: number
    hidden: yes
    sql: ${TABLE}.longitude ;;
  }

  dimension: state {
    type: string
    group_label:"GROUP_NAME"
    sql: ${TABLE}.state ;;
    map_layer_name: us_states
  }

  dimension: traffic_source {
    type: string
    sql: ${TABLE}.traffic_source ;;
  }

  dimension: zip {
    type: zipcode
    sql: ${TABLE}.zip ;;
  }

  measure: count {
    type: count
    drill_fields: [id, last_name, first_name, events.count, order_items.count]
  }
}
```

## Task 4 
>Open Products.view File and replace the code
> Change GROUP_NAME from the LAB

```
view: products {
  sql_table_name: `cloud-training-demos.looker_ecomm.products`
    ;;
  drill_fields: [id]

  dimension: id {
    primary_key: yes
    type: number
    sql: ${TABLE}.id ;;
  }

  dimension: brand {
    type: string
    group_label:"GROUP_NAME"
    sql: ${TABLE}.brand ;;
  }

  dimension: category {
    type: string
    group_label:"GROUP_NAME"
    sql: ${TABLE}.category ;;
  }

  dimension: cost {
    type: number
    sql: ${TABLE}.cost ;;
  }

  dimension: department {
    type: string
    group_label:"GROUP_NAME"
    sql: ${TABLE}.department ;;
  }

  dimension: distribution_center_id {
    type: string
    # hidden: yes
    sql: ${TABLE}.distribution_center_id ;;
  }

  dimension: name {
    type: string
    group_label:"GROUP_NAME"
    sql: ${TABLE}.name ;;
  }

  dimension: retail_price {
    type: number
    sql: ${TABLE}.retail_price ;;
  }

  dimension: sku {
    type: string
    sql: ${TABLE}.sku ;;
  }

  measure: count {
    type: count
    drill_fields: [id, name, distribution_centers.name, distribution_centers.id, inventory_items.count]
  }
}

```





