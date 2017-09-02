# MXHook

Hook Plugin for JavaScript

## 1\. Installation MXHook

1.  Download files !

2.  Add the code inside the body tag.

    <div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">

    <pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;script</span> <span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">"mx-hook.js"</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
    </pre>

    </div>

3.  Start coding freely :)

## 2\. Examples

1.  Easily create hooks.

    <div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">

    <pre style="margin: 0; line-height: 125%"><span style="color: #008800; font-weight: bold">var</span> h <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> Hook({
       func<span style="color: #333333">:</span><span style="color: #008800; font-weight: bold">function</span>() {
           console.log(<span style="background-color: #fff0f0">'Hook Example 1'</span>);
       },
       args<span style="color: #333333">:</span>[],
       name<span style="color: #333333">:</span><span style="background-color: #fff0f0">'test_hook'</span>
    });

    h.run();
    </pre>

    </div>

2.  Define events within options.

    <div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">

    <pre style="margin: 0; line-height: 125%"><span style="color: #008800; font-weight: bold">var</span> h <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> Hook({
       func<span style="color: #333333">:</span><span style="color: #008800; font-weight: bold">function</span>() {
    		console.log(<span style="background-color: #fff0f0">'Hook Example 2'</span>);
       },
       args<span style="color: #333333">:</span>[],
       name<span style="color: #333333">:</span><span style="background-color: #fff0f0">'test_hook'</span>
    });

    h.on(<span style="background-color: #fff0f0">'run'</span>, <span style="color: #008800; font-weight: bold">function</span>() {
    	console.log(<span style="background-color: #fff0f0">'Run event.'</span>);
    });

    h.run();
    </pre>

    </div>

3.  Run Hooks.

    <div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">

    <pre style="margin: 0; line-height: 125%"><span style="color: #008800; font-weight: bold">var</span> h1 <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> Hook({
       func<span style="color: #333333">:</span><span style="color: #008800; font-weight: bold">function</span>() {
    		console.log(<span style="background-color: #fff0f0">'Hook Example 1'</span>);
       },
       args<span style="color: #333333">:</span>[],
       name<span style="color: #333333">:</span><span style="background-color: #fff0f0">'test_hook'</span>
    });
    <span style="color: #008800; font-weight: bold">var</span> h2 <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> Hook({
       func<span style="color: #333333">:</span><span style="color: #008800; font-weight: bold">function</span>() {
    		console.log(<span style="background-color: #fff0f0">'Hook Example 2'</span>);
       },
       args<span style="color: #333333">:</span>[],
       name<span style="color: #333333">:</span><span style="background-color: #fff0f0">'test_hook'</span>
    });
    MXHook.run(<span style="background-color: #fff0f0">'test_hook'</span>);
    </pre>

    </div>

4.  Remove Hooks

    <div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">

    <pre style="margin: 0; line-height: 125%">MXHook.remove(<span style="background-color: #fff0f0">'testing_hook'</span>);
    </pre>

    </div>

## 3\. Options

<table border="1" width="100%" cellpadding="0" cellspacing="0">

<thead>

<tr>

<th width="100">Option Name</th>

<th width="100">Type</th>

<th>Details</th>

</tr>

</thead>

<tbody>

<tr>

<td class="title">func</td>

<td class="title">function</td>

<td>Function to be called</td>

</tr>

<tr>

<td class="title">name</td>

<td class="title">string</td>

<td>Hook name</td>

</tr>

<tr>

<td class="title">args</td>

<td class="title">array</td>

<td>Constant arguments to be sent to the job to be called.</td>

</tr>

<tr>

<td class="title">initialize(hook)</td>

<td class="title">function</td>

<td>The function to be executed after adding the hook.</td>

</tr>

</tbody>

</table>

## 4\. Methods

<table border="1" width="100%" cellpadding="0" cellspacing="0">

<thead>

<tr>

<th width="100">Method Name</th>

<th width="100">Return Type</th>

<th>Details</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="3" class="title" align="center">

#### Hook

</td>

</tr>

<tr>

<td class="title">Hook.getCount</td>

<td class="title">int</td>

<td>The number of times the hook works</td>

</tr>

<tr>

<td class="title">Hook.trigger</td>

<td class="title">Hook</td>

<td>Trigger hook event.</td>

</tr>

<tr>

<td class="title">Hook.on</td>

<td class="title">Hook</td>

<td>Bind hook event.</td>

</tr>

<tr>

<td class="title">Hook.unbind</td>

<td class="title">Hook</td>

<td>Unbind hook event.</td>

</tr>

<tr>

<td class="title">Hook.run(['argument1', 'argumentn'])</td>

<td class="title">Hook</td>

<td>Run hook.</td>

</tr>

<tr>

<td colspan="3" class="title" align="center">

#### MXHook

</td>

</tr>

<tr>

<td class="title">MXHook.add({/* Options */})</td>

<td class="title">Hook</td>

<td>Adding hook.</td>

</tr>

<tr>

<td class="title">MXHook.remove(_/** Optional */_'hook_name')</td>

<td class="title">MXHook</td>

<td>Remove hook by name. Note: If no name is sent, removes all hooks.</td>

</tr>

<tr>

<td class="title">MXHook.run(_/** Optional */_'hook_name')</td>

<td class="title">Hook</td>

<td>Run hooks by name. Note: If no name is sent, stopped all hooks.</td>

</tr>

<tr>

<td class="title">MXHook.get('hook_name')</td>

<td class="title">Hook</td>

<td>Get hooks by name.</td>

</tr>

</tbody>

</table>

## 5\. Events

<table border="1" width="100%" cellpadding="0" cellspacing="0">

<thead>

<tr>

<th width="100">Event Name</th>

<th>Details</th>

</tr>

</thead>

<tbody>

<tr>

<td class="title">beforerun</td>

<td>This function is executed every time before the hook runs.</td>

</tr>

<tr>

<td class="title">run</td>

<td>This function is executed every time after the hook runs.</td>

</tr>

<tr>

<td class="title">callback[ret, hook]</td>

<td>Callback event.</td>

</tr>

</tbody>

</table>

## 6\. Errors

<table border="1" width="100%" cellpadding="0" cellspacing="0" id="errors">

<thead>

<tr>

<th>Error</th>

<th width="100">Class</th>

<th>Details</th>

</tr>

</thead>

<tbody>

<tr>

<td class="title">Invalid argument was sent for adding hook.</td>

<td class="title">HookInvalidAddArgs</td>

<td>If a value other than object type is entered while adding the hook, you will get this error message. You can get help from the examples above when adding hooks.</td>

</tr>

<tr>

<td class="title">Hook function not defined correctly.</td>

<td class="title">HookIsNotFunction</td>

<td>The hook has to be defined as a function. The reason for encountering this error is to define a real function.</td>

</tr>

</tbody>

</table>