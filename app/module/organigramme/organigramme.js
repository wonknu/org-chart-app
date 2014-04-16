'use strict';

angular.module('orgchartappApp')
    .controller('OrgCtrl', function ($scope) {
        $scope.orgID = 'wrapper-org';
        $scope.title = 'The Agency Org chart';
        $scope.users = [
            {
                name: 'name1',
                email: 'name1@email.com',
                child: [
                    {
                        name: 'child name1',
                        email: 'child_name1@email.com'
                    },{
                        name: 'child name2',
                        email: 'child_name2@email.com',
                        grandchild: [
                            {
                                name: 'grandchild name1',
                                email: 'grandchild_name1@email.com'
                            }
                        ]
                    }
                ]
            },{
                name: 'name2',
                email: 'name2@email.com'
            },{
                name: 'name3',
                email: 'name2@email.com'
            }
        ];
        
        setTimeout(function ()
        {
            $("#org").jOrgChart({
                dragAndDrop: true,
                chartElement: '#' + $scope.orgID
            });
        }, 0);
    });
