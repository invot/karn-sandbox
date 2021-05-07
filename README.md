# Testing project 

The goal is to get a series of candles-like data point from an external API and provide a simple frontend to this. We want to see some text presentation 
as well as graphical (chart) presentation. Can be side by side, or switching between view, or whatever you see fits better. The UI should allow to pick date-time interval


The preferable tehnology stack is **angular/typescript/highcharts** plus whatever else you need to make it happen.

## API

The API provides a sequence of simple statistical records for some sort of load balancer. Each file can be served by any node and we want to see the distribution as well as totals per node and the grand totals
Those stat records are summarized in 5 minute intervals.

`GET https://stats.radio-t.com/rlb/api/candle?from=2021-04-07T19:39:38.069Z&to=2021-04-08T19:39:38.069Z`. It returns a list of time-series records like this:

```
    {
        "Nodes": {
            "all": {
                "Files": {
                    "rtfiles/rt_podcast500.mp3": 12,
                    "rtfiles/rt_podcast681.mp3": 1,
                    "rtfiles/rt_podcast687.mp3": 1,
                    "rtfiles/rt_podcast708.mp3": 1,
                    "rtfiles/rt_podcast728.mp3": 2,
                    "rtfiles/rt_podcast729.mp3": 2,
                    "rtfiles/rt_podcast730.mp3": 2,
                    "rtfiles/rt_podcast731.mp3": 2,
                    "rtfiles/rt_podcast732.mp3": 2,
                    "rtfiles/rt_podcast733.mp3": 2,
                    "rtfiles/rt_podcast734.mp3": 2,
                    "rtfiles/rt_podcast735.mp3": 2,
                    "rtfiles/rt_podcast736.mp3": 2,
                    "rtfiles/rt_podcast737.mp3": 2,
                    "rtfiles/rt_podcast738.mp3": 2,
                    "rtfiles/rt_podcast739.mp3": 2,
                    "rtfiles/rt_podcast740.mp3": 2,
                    "rtfiles/rt_podcast741.mp3": 2,
                    "rtfiles/rt_podcast742.mp3": 2,
                    "rtfiles/rt_podcast743.mp3": 2,
                    "rtfiles/rt_podcast744.mp3": 2,
                    "rtfiles/rt_podcast745.mp3": 6,
                    "rtfiles/rt_podcast746.mp3": 6,
                    "rtfiles/rt_podcast747.mp3": 8,
                    "rtfiles/rt_podcast748.mp3": 83
                },
                "Volume": 152
            },
            "n1.radio-t.com": {
                "Files": {
                    "rtfiles/rt_podcast500.mp3": 2,
                    "rtfiles/rt_podcast733.mp3": 2,
                    "rtfiles/rt_podcast734.mp3": 1,
                    "rtfiles/rt_podcast739.mp3": 1,
                    "rtfiles/rt_podcast740.mp3": 2,
                    "rtfiles/rt_podcast742.mp3": 1,
                    "rtfiles/rt_podcast747.mp3": 2,
                    "rtfiles/rt_podcast748.mp3": 10
                },
                "Volume": 21
            },
            "n2.radio-t.com": {
                "Files": {
                    "rtfiles/rt_podcast500.mp3": 1,
                    "rtfiles/rt_podcast735.mp3": 1,
                    "rtfiles/rt_podcast738.mp3": 1,
                    "rtfiles/rt_podcast744.mp3": 2,
                    "rtfiles/rt_podcast745.mp3": 1,
                    "rtfiles/rt_podcast746.mp3": 1,
                    "rtfiles/rt_podcast748.mp3": 10
                },
                "Volume": 17
            },
            "n3.radio-t.com": {
                "Files": {
                    "rtfiles/rt_podcast732.mp3": 1,
                    "rtfiles/rt_podcast737.mp3": 1,
                    "rtfiles/rt_podcast743.mp3": 1,
                    "rtfiles/rt_podcast745.mp3": 1,
                    "rtfiles/rt_podcast746.mp3": 1,
                    "rtfiles/rt_podcast747.mp3": 1,
                    "rtfiles/rt_podcast748.mp3": 10
                },
                "Volume": 16
            },
            "n4.radio-t.com": {
                "Files": {
                    "rtfiles/rt_podcast500.mp3": 2,
                    "rtfiles/rt_podcast730.mp3": 1,
                    "rtfiles/rt_podcast732.mp3": 1,
                    "rtfiles/rt_podcast734.mp3": 1,
                    "rtfiles/rt_podcast735.mp3": 1,
                    "rtfiles/rt_podcast737.mp3": 1,
                    "rtfiles/rt_podcast746.mp3": 1,
                    "rtfiles/rt_podcast747.mp3": 2,
                    "rtfiles/rt_podcast748.mp3": 13
                },
                "Volume": 23
            },
            "n5.radio-t.com": {
                "Files": {
                    "rtfiles/rt_podcast500.mp3": 1,
                    "rtfiles/rt_podcast730.mp3": 1,
                    "rtfiles/rt_podcast742.mp3": 1,
                    "rtfiles/rt_podcast746.mp3": 1,
                    "rtfiles/rt_podcast747.mp3": 2,
                    "rtfiles/rt_podcast748.mp3": 12
                },
                "Volume": 18
            },
            "n6.radio-t.com": {
                "Files": {
                    "rtfiles/rt_podcast500.mp3": 1,
                    "rtfiles/rt_podcast736.mp3": 1,
                    "rtfiles/rt_podcast741.mp3": 1,
                    "rtfiles/rt_podcast748.mp3": 7
                },
                "Volume": 10
            },
            "n7.radio-t.com": {
                "Files": {
                    "rtfiles/rt_podcast500.mp3": 2,
                    "rtfiles/rt_podcast681.mp3": 1,
                    "rtfiles/rt_podcast728.mp3": 1,
                    "rtfiles/rt_podcast729.mp3": 1,
                    "rtfiles/rt_podcast736.mp3": 1,
                    "rtfiles/rt_podcast739.mp3": 1,
                    "rtfiles/rt_podcast745.mp3": 2,
                    "rtfiles/rt_podcast748.mp3": 1
                },
                "Volume": 10
            },
            "n8.radio-t.com": {
                "Files": {
                    "rtfiles/rt_podcast500.mp3": 3,
                    "rtfiles/rt_podcast708.mp3": 1,
                    "rtfiles/rt_podcast729.mp3": 1,
                    "rtfiles/rt_podcast741.mp3": 1,
                    "rtfiles/rt_podcast743.mp3": 1,
                    "rtfiles/rt_podcast745.mp3": 1,
                    "rtfiles/rt_podcast747.mp3": 1,
                    "rtfiles/rt_podcast748.mp3": 10
                },
                "Volume": 19
            },
            "n9.radio-t.com": {
                "Files": {
                    "rtfiles/rt_podcast687.mp3": 1,
                    "rtfiles/rt_podcast728.mp3": 1,
                    "rtfiles/rt_podcast731.mp3": 2,
                    "rtfiles/rt_podcast738.mp3": 1,
                    "rtfiles/rt_podcast745.mp3": 1,
                    "rtfiles/rt_podcast746.mp3": 2,
                    "rtfiles/rt_podcast748.mp3": 10
                },
                "Volume": 18
            }
        },
        "StartMinute": "2021-04-07T14:40:00-05:00"
    },
```

Query params:
- `from` (required) is the beginning of the interval, format is RFC3339, for example 2006-01-02T15:04:05+07:00
- `to` (optional) is the end of the interval
- `max_points` (optional, default 100) unsigned integer up to 255, sets aggregate interval to return not more than specified amount of candles
- `aggregate` (optional, overwrites max_points) is the aggregation interval (truncated to minutes), format examples are 5m, 600s, 1h

`all` represents total counts, across all nodes, and each node record, i.e. `n1.radio-t.com` represents counts for this particular node. `StartMinute` is the time for 5m (default) interval

For each node `Files` is a bunch of pairs "filename: count", and `Volume` just a sum of all counts for the node in a given time slice.

# expected results

- We expect some form of deployable UI so we can play with this
- Optionally it can be deployed to some external place you have in mind
- Will be nice (extra points) if all of this built and deployed by github's CI (actions)
- Will be nice (more extra points) if the final artifact provided as a docker image