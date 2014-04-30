/**
 * Created by Ratan on 24.4.14.
 */
TestCase("Loader Test:", {
    "test HBSLoad": function(){
        var res = new resources(["index","new/advanced","new/base","new/index","new/standards","new","project","projects"]);
        assertEquals(8, res.hbss.length);
    },

});